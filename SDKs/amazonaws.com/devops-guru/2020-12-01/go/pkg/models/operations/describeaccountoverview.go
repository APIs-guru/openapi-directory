package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DescribeAccountOverviewHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeAccountOverviewRequestBody struct {
	FromTime time.Time  `json:"FromTime"`
	ToTime   *time.Time `json:"ToTime,omitempty"`
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
