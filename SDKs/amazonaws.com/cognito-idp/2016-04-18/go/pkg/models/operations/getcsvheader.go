package operations

import (
	"openapi/pkg/models/shared"
)

type GetCsvHeaderXAmzTargetEnum string

const (
	GetCsvHeaderXAmzTargetEnumAwsCognitoIdentityProviderServiceGetCsvHeader GetCsvHeaderXAmzTargetEnum = "AWSCognitoIdentityProviderService.GetCSVHeader"
)

type GetCsvHeaderHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetCsvHeaderXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetCsvHeaderRequest struct {
	Headers GetCsvHeaderHeaders
	Request shared.GetCsvHeaderRequest `request:"mediaType=application/json"`
}

type GetCsvHeaderResponse struct {
	ContentType               string
	GetCsvHeaderResponse      *shared.GetCsvHeaderResponse
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	NotAuthorizedException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
