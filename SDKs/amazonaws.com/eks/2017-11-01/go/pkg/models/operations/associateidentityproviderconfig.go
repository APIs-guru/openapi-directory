package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateIdentityProviderConfigPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type AssociateIdentityProviderConfigHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type AssociateIdentityProviderConfigRequestBodyOidc struct {
	ClientID                   *string           `json:"clientId"`
	GroupsClaim                *string           `json:"groupsClaim"`
	GroupsPrefix               *string           `json:"groupsPrefix"`
	IdentityProviderConfigName *string           `json:"identityProviderConfigName"`
	IssuerURL                  *string           `json:"issuerUrl"`
	RequiredClaims             map[string]string `json:"requiredClaims"`
	UsernameClaim              *string           `json:"usernameClaim"`
	UsernamePrefix             *string           `json:"usernamePrefix"`
}

type AssociateIdentityProviderConfigRequestBody struct {
	ClientRequestToken *string                                        `json:"clientRequestToken"`
	Oidc               AssociateIdentityProviderConfigRequestBodyOidc `json:"oidc"`
	Tags               map[string]string                              `json:"tags"`
}

type AssociateIdentityProviderConfigRequest struct {
	PathParams AssociateIdentityProviderConfigPathParams
	Headers    AssociateIdentityProviderConfigHeaders
	Request    AssociateIdentityProviderConfigRequestBody `request:"mediaType=application/json"`
}

type AssociateIdentityProviderConfigResponse struct {
	AssociateIdentityProviderConfigResponse *shared.AssociateIdentityProviderConfigResponse
	ClientException                         *interface{}
	ContentType                             string
	InvalidParameterException               *interface{}
	InvalidRequestException                 *interface{}
	ResourceInUseException                  *interface{}
	ResourceNotFoundException               *interface{}
	ServerException                         *interface{}
	StatusCode                              int64
}
