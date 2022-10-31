package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeContactPathParams struct {
	ContactID string `pathParam:"style=simple,explode=false,name=contactId"`
}

type DescribeContactHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeContactRequest struct {
	PathParams DescribeContactPathParams
	Headers    DescribeContactHeaders
}

type DescribeContactResponse struct {
	ContentType               string
	DependencyException       *interface{}
	DescribeContactResponse   *shared.DescribeContactResponse
	InvalidParameterException *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
