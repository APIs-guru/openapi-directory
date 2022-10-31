package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAuthEventFeedbackXAmzTargetEnum string

const (
	UpdateAuthEventFeedbackXAmzTargetEnumAwsCognitoIdentityProviderServiceUpdateAuthEventFeedback UpdateAuthEventFeedbackXAmzTargetEnum = "AWSCognitoIdentityProviderService.UpdateAuthEventFeedback"
)

type UpdateAuthEventFeedbackHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateAuthEventFeedbackXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateAuthEventFeedbackRequest struct {
	Headers UpdateAuthEventFeedbackHeaders
	Request shared.UpdateAuthEventFeedbackRequest `request:"mediaType=application/json"`
}

type UpdateAuthEventFeedbackResponse struct {
	ContentType                      string
	InternalErrorException           *interface{}
	InvalidParameterException        *interface{}
	NotAuthorizedException           *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	TooManyRequestsException         *interface{}
	UpdateAuthEventFeedbackResponse  map[string]interface{}
	UserNotFoundException            *interface{}
	UserPoolAddOnNotEnabledException *interface{}
}
