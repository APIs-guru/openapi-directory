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
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListMlTransformsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
