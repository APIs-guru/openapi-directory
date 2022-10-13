package operations

import (
	"openapi/pkg/models/shared"
)

type AdminSetUserMfaPreferenceXAmzTargetEnum string

const (
	AdminSetUserMfaPreferenceXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminSetUserMfaPreference AdminSetUserMfaPreferenceXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminSetUserMFAPreference"
)

type AdminSetUserMfaPreferenceHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AdminSetUserMfaPreferenceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AdminSetUserMfaPreferenceRequest struct {
	Headers AdminSetUserMfaPreferenceHeaders
	Request shared.AdminSetUserMfaPreferenceRequest `request:"mediaType=application/json"`
}

type AdminSetUserMfaPreferenceResponse struct {
	AdminSetUserMfaPreferenceResponse map[string]interface{}
	ContentType                       string
	InternalErrorException            *interface{}
	InvalidParameterException         *interface{}
	NotAuthorizedException            *interface{}
	PasswordResetRequiredException    *interface{}
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
	UserNotConfirmedException         *interface{}
	UserNotFoundException             *interface{}
}
