package operations

import (
	"openapi/pkg/models/shared"
)

type SetUserSettingsXAmzTargetEnum string

const (
	SetUserSettingsXAmzTargetEnumAwsCognitoIdentityProviderServiceSetUserSettings SetUserSettingsXAmzTargetEnum = "AWSCognitoIdentityProviderService.SetUserSettings"
)

type SetUserSettingsHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        SetUserSettingsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
