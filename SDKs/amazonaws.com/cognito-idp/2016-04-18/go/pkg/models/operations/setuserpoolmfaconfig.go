package operations

import (
	"openapi/pkg/models/shared"
)

type SetUserPoolMfaConfigXAmzTargetEnum string

const (
	SetUserPoolMfaConfigXAmzTargetEnumAwsCognitoIdentityProviderServiceSetUserPoolMfaConfig SetUserPoolMfaConfigXAmzTargetEnum = "AWSCognitoIdentityProviderService.SetUserPoolMfaConfig"
)

type SetUserPoolMfaConfigHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        SetUserPoolMfaConfigXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type SetUserPoolMfaConfigRequest struct {
	Headers SetUserPoolMfaConfigHeaders
	Request shared.SetUserPoolMfaConfigRequest `request:"mediaType=application/json"`
}

type SetUserPoolMfaConfigResponse struct {
	ContentType                              string
	InternalErrorException                   *interface{}
	InvalidParameterException                *interface{}
	InvalidSmsRoleAccessPolicyException      *interface{}
	InvalidSmsRoleTrustRelationshipException *interface{}
	NotAuthorizedException                   *interface{}
	ResourceNotFoundException                *interface{}
	SetUserPoolMfaConfigResponse             *shared.SetUserPoolMfaConfigResponse
	StatusCode                               int64
	TooManyRequestsException                 *interface{}
}
