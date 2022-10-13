package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAccountPreferencesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeAccountPreferencesRequestBody struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}

type DescribeAccountPreferencesRequest struct {
	Headers DescribeAccountPreferencesHeaders
	Request DescribeAccountPreferencesRequestBody `request:"mediaType=application/json"`
}

type DescribeAccountPreferencesResponse struct {
	ContentType                        string
	DescribeAccountPreferencesResponse *shared.DescribeAccountPreferencesResponse
	InternalServerError                *interface{}
	StatusCode                         int64
}
