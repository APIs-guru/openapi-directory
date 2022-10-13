package operations

import (
	"openapi/pkg/models/shared"
)

type GetPartitionIndexesQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetPartitionIndexesXAmzTargetEnum string

const (
	GetPartitionIndexesXAmzTargetEnumAwsGlueGetPartitionIndexes GetPartitionIndexesXAmzTargetEnum = "AWSGlue.GetPartitionIndexes"
)

type GetPartitionIndexesHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetPartitionIndexesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetPartitionIndexesRequest struct {
	QueryParams GetPartitionIndexesQueryParams
	Headers     GetPartitionIndexesHeaders
	Request     shared.GetPartitionIndexesRequest `request:"mediaType=application/json"`
}

type GetPartitionIndexesResponse struct {
	ConflictException           *interface{}
	ContentType                 string
	EntityNotFoundException     *interface{}
	GetPartitionIndexesResponse *shared.GetPartitionIndexesResponse
	InternalServiceException    *interface{}
	InvalidInputException       *interface{}
	OperationTimeoutException   *interface{}
	StatusCode                  int64
}
