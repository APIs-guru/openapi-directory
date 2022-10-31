package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateEncryptionConfigPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type AssociateEncryptionConfigHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type AssociateEncryptionConfigRequestBody struct {
	ClientRequestToken *string                   `json:"clientRequestToken,omitempty"`
	EncryptionConfig   []shared.EncryptionConfig `json:"encryptionConfig"`
}

type AssociateEncryptionConfigRequest struct {
	PathParams AssociateEncryptionConfigPathParams
	Headers    AssociateEncryptionConfigHeaders
	Request    AssociateEncryptionConfigRequestBody `request:"mediaType=application/json"`
}

type AssociateEncryptionConfigResponse struct {
	AssociateEncryptionConfigResponse *shared.AssociateEncryptionConfigResponse
	ClientException                   *interface{}
	ContentType                       string
	InvalidParameterException         *interface{}
	InvalidRequestException           *interface{}
	ResourceInUseException            *interface{}
	ResourceNotFoundException         *interface{}
	ServerException                   *interface{}
	StatusCode                        int64
}
