package operations

import (
	"openapi/pkg/models/shared"
)

type AdminSetUserSettingsXAmzTargetEnum string

const (
	AdminSetUserSettingsXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminSetUserSettings AdminSetUserSettingsXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminSetUserSettings"
)

type AdminSetUserSettingsHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AdminSetUserSettingsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AdminSetUserSettingsRequest struct {
	Headers AdminSetUserSettingsHeaders
	Request shared.AdminSetUserSettingsRequest `request:"mediaType=application/json"`
}

type AdminSetUserSettingsResponse struct {
	AdminSetUserSettingsResponse map[string]interface{}
	ContentType                  string
	InternalErrorException       *interface{}
	InvalidParameterException    *interface{}
	NotAuthorizedException       *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	UserNotFoundException        *interface{}
}
