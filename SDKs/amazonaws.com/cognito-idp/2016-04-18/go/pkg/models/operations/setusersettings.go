package operations

import (
	"openapi/pkg/models/shared"
)

type SetUserSettingsXAmzTargetEnum string

const (
	SetUserSettingsXAmzTargetEnumAwsCognitoIdentityProviderServiceSetUserSettings SetUserSettingsXAmzTargetEnum = "AWSCognitoIdentityProviderService.SetUserSettings"
)

type SetUserSettingsHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SetUserSettingsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SetUserSettingsRequest struct {
	Headers SetUserSettingsHeaders
	Request shared.SetUserSettingsRequest `request:"mediaType=application/json"`
}

type SetUserSettingsResponse struct {
	ContentType                    string
	InternalErrorException         *interface{}
	InvalidParameterException      *interface{}
	NotAuthorizedException         *interface{}
	PasswordResetRequiredException *interface{}
	ResourceNotFoundException      *interface{}
	SetUserSettingsResponse        map[string]interface{}
	StatusCode                     int64
	UserNotConfirmedException      *interface{}
	UserNotFoundException          *interface{}
}
