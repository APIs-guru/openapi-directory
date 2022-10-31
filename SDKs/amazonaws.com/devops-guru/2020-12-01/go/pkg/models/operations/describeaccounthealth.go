package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAccountHealthHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeAccountHealthRequest struct {
	Headers DescribeAccountHealthHeaders
}

type DescribeAccountHealthResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	DescribeAccountHealthResponse *shared.DescribeAccountHealthResponse
	InternalServerException       *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
