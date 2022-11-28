package operations

import (
	"openapi/pkg/models/shared"
)

type CreateInputHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateInputRequestBodyInputDefinition
// The definition of the input.
type CreateInputRequestBodyInputDefinition struct {
	Attributes []shared.Attribute `json:"attributes,omitempty"`
}

type CreateInputRequestBody struct {
	InputDefinition  CreateInputRequestBodyInputDefinition `json:"inputDefinition"`
	InputDescription *string                               `json:"inputDescription,omitempty"`
	InputName        string                                `json:"inputName"`
	Tags             []shared.Tag                          `json:"tags,omitempty"`
}

type CreateInputRequest struct {
	Headers CreateInputHeaders
	Request CreateInputRequestBody `request:"mediaType=application/json"`
}

type CreateInputResponse struct {
	ContentType                    string
	CreateInputResponse            *shared.CreateInputResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	ResourceAlreadyExistsException *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
