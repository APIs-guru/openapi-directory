package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateIdentityProviderConfigPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type AssociateIdentityProviderConfigHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type AssociateIdentityProviderConfigRequestBodyOidc struct {
	ClientID                   *string           `json:"clientId,omitempty"`
	GroupsClaim                *string           `json:"groupsClaim,omitempty"`
	GroupsPrefix               *string           `json:"groupsPrefix,omitempty"`
	IdentityProviderConfigName *string           `json:"identityProviderConfigName,omitempty"`
	IssuerURL                  *string           `json:"issuerUrl,omitempty"`
	RequiredClaims             map[string]string `json:"requiredClaims,omitempty"`
	UsernameClaim              *string           `json:"usernameClaim,omitempty"`
	UsernamePrefix             *string           `json:"usernamePrefix,omitempty"`
}

type AssociateIdentityProviderConfigRequestBody struct {
	ClientRequestToken *string                                        `json:"clientRequestToken,omitempty"`
	Oidc               AssociateIdentityProviderConfigRequestBodyOidc `json:"oidc"`
	Tags               map[string]string                              `json:"tags,omitempty"`
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
