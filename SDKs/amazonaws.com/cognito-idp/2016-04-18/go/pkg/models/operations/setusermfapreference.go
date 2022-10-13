package operations

import (
	"openapi/pkg/models/shared"
)

type SetUserMfaPreferenceXAmzTargetEnum string

const (
	SetUserMfaPreferenceXAmzTargetEnumAwsCognitoIdentityProviderServiceSetUserMfaPreference SetUserMfaPreferenceXAmzTargetEnum = "AWSCognitoIdentityProviderService.SetUserMFAPreference"
)

type SetUserMfaPreferenceHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SetUserMfaPreferenceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SetUserMfaPreferenceRequest struct {
	Headers SetUserMfaPreferenceHeaders
	Request shared.SetUserMfaPreferenceRequest `request:"mediaType=application/json"`
}

type SetUserMfaPreferenceResponse struct {
	ContentType                    string
	InternalErrorException         *interface{}
	InvalidParameterException      *interface{}
	NotAuthorizedException         *interface{}
	PasswordResetRequiredException *interface{}
	ResourceNotFoundException      *interface{}
	SetUserMfaPreferenceResponse   map[string]interface{}
	StatusCode                     int64
	UserNotConfirmedException      *interface{}
	UserNotFoundException          *interface{}
}
