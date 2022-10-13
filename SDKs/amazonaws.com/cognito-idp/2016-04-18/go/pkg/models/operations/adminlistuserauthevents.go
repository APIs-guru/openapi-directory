package operations

import (
	"openapi/pkg/models/shared"
)

type AdminListUserAuthEventsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type AdminListUserAuthEventsXAmzTargetEnum string

const (
	AdminListUserAuthEventsXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminListUserAuthEvents AdminListUserAuthEventsXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminListUserAuthEvents"
)

type AdminListUserAuthEventsHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AdminListUserAuthEventsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AdminListUserAuthEventsRequest struct {
	QueryParams AdminListUserAuthEventsQueryParams
	Headers     AdminListUserAuthEventsHeaders
	Request     shared.AdminListUserAuthEventsRequest `request:"mediaType=application/json"`
}

type AdminListUserAuthEventsResponse struct {
	AdminListUserAuthEventsResponse  *shared.AdminListUserAuthEventsResponse
	ContentType                      string
	InternalErrorException           *interface{}
	InvalidParameterException        *interface{}
	NotAuthorizedException           *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	TooManyRequestsException         *interface{}
	UserNotFoundException            *interface{}
	UserPoolAddOnNotEnabledException *interface{}
}
