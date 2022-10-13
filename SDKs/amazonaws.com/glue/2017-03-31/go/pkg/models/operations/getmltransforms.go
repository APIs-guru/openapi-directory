package operations

import (
	"openapi/pkg/models/shared"
)

type GetMlTransformsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetMlTransformsXAmzTargetEnum string

const (
	GetMlTransformsXAmzTargetEnumAwsGlueGetMlTransforms GetMlTransformsXAmzTargetEnum = "AWSGlue.GetMLTransforms"
)

type GetMlTransformsHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetMlTransformsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetMlTransformsRequest struct {
	QueryParams GetMlTransformsQueryParams
	Headers     GetMlTransformsHeaders
	Request     shared.GetMlTransformsRequest `request:"mediaType=application/json"`
}

type GetMlTransformsResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	GetMlTransformsResponse   *shared.GetMlTransformsResponse
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
