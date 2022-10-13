package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DescribeAccountOverviewHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeAccountOverviewRequestBody struct {
	FromTime time.Time  `json:"FromTime"`
	ToTime   *time.Time `json:"ToTime"`
}

type DescribeAccountOverviewRequest struct {
	Headers DescribeAccountOverviewHeaders
	Request DescribeAccountOverviewRequestBody `request:"mediaType=application/json"`
}

type DescribeAccountOverviewResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	DescribeAccountOverviewResponse *shared.DescribeAccountOverviewResponse
	InternalServerException         *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
	ValidationException             *interface{}
}
