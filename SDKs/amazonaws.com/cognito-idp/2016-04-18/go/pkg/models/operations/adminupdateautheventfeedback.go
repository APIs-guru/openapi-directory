package operations

import (
	"openapi/pkg/models/shared"
)

type AdminUpdateAuthEventFeedbackXAmzTargetEnum string

const (
	AdminUpdateAuthEventFeedbackXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminUpdateAuthEventFeedback AdminUpdateAuthEventFeedbackXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback"
)

type AdminUpdateAuthEventFeedbackHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AdminUpdateAuthEventFeedbackXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AdminUpdateAuthEventFeedbackRequest struct {
	Headers AdminUpdateAuthEventFeedbackHeaders
	Request shared.AdminUpdateAuthEventFeedbackRequest `request:"mediaType=application/json"`
}

type AdminUpdateAuthEventFeedbackResponse struct {
	AdminUpdateAuthEventFeedbackResponse map[string]interface{}
	ContentType                          string
	InternalErrorException               *interface{}
	InvalidParameterException            *interface{}
	NotAuthorizedException               *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
	TooManyRequestsException             *interface{}
	UserNotFoundException                *interface{}
	UserPoolAddOnNotEnabledException     *interface{}
}
