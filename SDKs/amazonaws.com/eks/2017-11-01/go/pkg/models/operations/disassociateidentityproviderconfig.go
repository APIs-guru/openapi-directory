package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateIdentityProviderConfigPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type DisassociateIdentityProviderConfigHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig struct {
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
}

type DisassociateIdentityProviderConfigRequestBody struct {
	ClientRequestToken     *string                                                             `json:"clientRequestToken,omitempty"`
	IdentityProviderConfig DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig `json:"identityProviderConfig"`
}

type DisassociateIdentityProviderConfigRequest struct {
	PathParams DisassociateIdentityProviderConfigPathParams
	Headers    DisassociateIdentityProviderConfigHeaders
	Request    DisassociateIdentityProviderConfigRequestBody `request:"mediaType=application/json"`
}

type DisassociateIdentityProviderConfigResponse struct {
	ClientException                            *interface{}
	ContentType                                string
	DisassociateIdentityProviderConfigResponse *shared.DisassociateIdentityProviderConfigResponse
	InvalidParameterException                  *interface{}
	InvalidRequestException                    *interface{}
	ResourceInUseException                     *interface{}
	ResourceNotFoundException                  *interface{}
	ServerException                            *interface{}
	StatusCode                                 int64
}
