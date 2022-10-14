package operations

import (
	"openapi/pkg/models/shared"
)

type PutProfileObjectTypePathParams struct {
	DomainName     string `pathParam:"style=simple,explode=false,name=DomainName"`
	ObjectTypeName string `pathParam:"style=simple,explode=false,name=ObjectTypeName"`
}

type PutProfileObjectTypeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutProfileObjectTypeRequestBody struct {
	AllowProfileCreation *bool                             `json:"AllowProfileCreation,omitempty"`
	Description          string                            `json:"Description"`
	EncryptionKey        *string                           `json:"EncryptionKey,omitempty"`
	ExpirationDays       *int64                            `json:"ExpirationDays,omitempty"`
	Fields               map[string]shared.ObjectTypeField `json:"Fields,omitempty"`
	Keys                 map[string][]shared.ObjectTypeKey `json:"Keys,omitempty"`
	Tags                 map[string]string                 `json:"Tags,omitempty"`
	TemplateID           *string                           `json:"TemplateId,omitempty"`
}

type PutProfileObjectTypeRequest struct {
	PathParams PutProfileObjectTypePathParams
	Headers    PutProfileObjectTypeHeaders
	Request    PutProfileObjectTypeRequestBody `request:"mediaType=application/json"`
}

type PutProfileObjectTypeResponse struct {
	AccessDeniedException        *interface{}
	BadRequestException          *interface{}
	ContentType                  string
	InternalServerException      *interface{}
	PutProfileObjectTypeResponse *shared.PutProfileObjectTypeResponse
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
}
