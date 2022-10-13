package operations

import (
	"openapi/pkg/models/shared"
)

type GetCognitoEventsPathParams struct {
	IdentityPoolID string `pathParam:"style=simple,explode=false,name=IdentityPoolId"`
}

type GetCognitoEventsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCognitoEventsRequest struct {
	PathParams GetCognitoEventsPathParams
	Headers    GetCognitoEventsHeaders
}

type GetCognitoEventsResponse struct {
	ContentType               string
	GetCognitoEventsResponse  *shared.GetCognitoEventsResponse
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	NotAuthorizedException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
