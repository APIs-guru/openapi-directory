package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetAggregateResourceConfigXAmzTargetEnum string

const (
	BatchGetAggregateResourceConfigXAmzTargetEnumStarlingDoveServiceBatchGetAggregateResourceConfig BatchGetAggregateResourceConfigXAmzTargetEnum = "StarlingDoveService.BatchGetAggregateResourceConfig"
)

type BatchGetAggregateResourceConfigHeaders struct {
	XAmzAlgorithm     *string                                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetAggregateResourceConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchGetAggregateResourceConfigRequest struct {
	Headers BatchGetAggregateResourceConfigHeaders
	Request shared.BatchGetAggregateResourceConfigRequest `request:"mediaType=application/json"`
}

type BatchGetAggregateResourceConfigResponse struct {
	BatchGetAggregateResourceConfigResponse *shared.BatchGetAggregateResourceConfigResponse
	ContentType                             string
	NoSuchConfigurationAggregatorException  *interface{}
	StatusCode                              int64
	ValidationException                     *interface{}
}
