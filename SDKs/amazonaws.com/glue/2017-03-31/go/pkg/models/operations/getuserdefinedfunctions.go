package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserDefinedFunctionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetUserDefinedFunctionsXAmzTargetEnum string

const (
	GetUserDefinedFunctionsXAmzTargetEnumAwsGlueGetUserDefinedFunctions GetUserDefinedFunctionsXAmzTargetEnum = "AWSGlue.GetUserDefinedFunctions"
)

type GetUserDefinedFunctionsHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetUserDefinedFunctionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetUserDefinedFunctionsRequest struct {
	QueryParams GetUserDefinedFunctionsQueryParams
	Headers     GetUserDefinedFunctionsHeaders
	Request     shared.GetUserDefinedFunctionsRequest `request:"mediaType=application/json"`
}

type GetUserDefinedFunctionsResponse struct {
	ContentType                     string
	EntityNotFoundException         *interface{}
	GetUserDefinedFunctionsResponse *shared.GetUserDefinedFunctionsResponse
	GlueEncryptionException         *interface{}
	InternalServiceException        *interface{}
	InvalidInputException           *interface{}
	OperationTimeoutException       *interface{}
	StatusCode                      int64
}
