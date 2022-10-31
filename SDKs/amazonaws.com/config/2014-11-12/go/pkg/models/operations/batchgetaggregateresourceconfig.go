package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetAggregateResourceConfigXAmzTargetEnum string

const (
	BatchGetAggregateResourceConfigXAmzTargetEnumStarlingDoveServiceBatchGetAggregateResourceConfig BatchGetAggregateResourceConfigXAmzTargetEnum = "StarlingDoveService.BatchGetAggregateResourceConfig"
)

type BatchGetAggregateResourceConfigHeaders struct {
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetAggregateResourceConfigXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
