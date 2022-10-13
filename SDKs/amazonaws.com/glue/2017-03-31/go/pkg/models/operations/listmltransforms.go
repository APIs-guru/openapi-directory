package operations

import (
	"openapi/pkg/models/shared"
)

type ListMlTransformsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListMlTransformsXAmzTargetEnum string

const (
	ListMlTransformsXAmzTargetEnumAwsGlueListMlTransforms ListMlTransformsXAmzTargetEnum = "AWSGlue.ListMLTransforms"
)

type ListMlTransformsHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListMlTransformsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListMlTransformsRequest struct {
	QueryParams ListMlTransformsQueryParams
	Headers     ListMlTransformsHeaders
	Request     shared.ListMlTransformsRequest `request:"mediaType=application/json"`
}

type ListMlTransformsResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	ListMlTransformsResponse  *shared.ListMlTransformsResponse
	OperationTimeoutException *interface{}
	StatusCode                int64
}
