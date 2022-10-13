package operations

import (
	"openapi/pkg/models/shared"
)

type DecreaseReplicationFactorXAmzTargetEnum string

const (
	DecreaseReplicationFactorXAmzTargetEnumAmazonDaxv3DecreaseReplicationFactor DecreaseReplicationFactorXAmzTargetEnum = "AmazonDAXV3.DecreaseReplicationFactor"
)

type DecreaseReplicationFactorHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DecreaseReplicationFactorXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DecreaseReplicationFactorRequest struct {
	Headers DecreaseReplicationFactorHeaders
	Request shared.DecreaseReplicationFactorRequest `request:"mediaType=application/json"`
}

type DecreaseReplicationFactorResponse struct {
	ClusterNotFoundFault                 *interface{}
	ContentType                          string
	DecreaseReplicationFactorResponse    *shared.DecreaseReplicationFactorResponse
	InvalidClusterStateFault             *interface{}
	InvalidParameterCombinationException *interface{}
	InvalidParameterValueException       *interface{}
	NodeNotFoundFault                    *interface{}
	ServiceLinkedRoleNotFoundFault       *interface{}
	StatusCode                           int64
}
