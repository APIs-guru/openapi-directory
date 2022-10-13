package operations

import (
	"openapi/pkg/models/shared"
)

type AdminListGroupsForUserQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type AdminListGroupsForUserXAmzTargetEnum string

const (
	AdminListGroupsForUserXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminListGroupsForUser AdminListGroupsForUserXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminListGroupsForUser"
)

type AdminListGroupsForUserHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AdminListGroupsForUserXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AdminListGroupsForUserRequest struct {
	QueryParams AdminListGroupsForUserQueryParams
	Headers     AdminListGroupsForUserHeaders
	Request     shared.AdminListGroupsForUserRequest `request:"mediaType=application/json"`
}

type AdminListGroupsForUserResponse struct {
	AdminListGroupsForUserResponse *shared.AdminListGroupsForUserResponse
	ContentType                    string
	InternalErrorException         *interface{}
	InvalidParameterException      *interface{}
	NotAuthorizedException         *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
	UserNotFoundException          *interface{}
}
