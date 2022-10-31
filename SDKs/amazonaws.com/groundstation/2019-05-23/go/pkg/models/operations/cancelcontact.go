package operations

import (
	"openapi/pkg/models/shared"
)

type CancelContactPathParams struct {
	ContactID string `pathParam:"style=simple,explode=false,name=contactId"`
}

type CancelContactHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CancelContactRequest struct {
	PathParams CancelContactPathParams
	Headers    CancelContactHeaders
}

type CancelContactResponse struct {
	ContactIDResponse         *shared.ContactIDResponse
	ContentType               string
	DependencyException       *interface{}
	InvalidParameterException *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
