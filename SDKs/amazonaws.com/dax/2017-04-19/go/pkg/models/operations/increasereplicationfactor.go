package operations

import (
	"openapi/pkg/models/shared"
)

type IncreaseReplicationFactorXAmzTargetEnum string

const (
	IncreaseReplicationFactorXAmzTargetEnumAmazonDaxv3IncreaseReplicationFactor IncreaseReplicationFactorXAmzTargetEnum = "AmazonDAXV3.IncreaseReplicationFactor"
)

type IncreaseReplicationFactorHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        IncreaseReplicationFactorXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type IncreaseReplicationFactorRequest struct {
	Headers IncreaseReplicationFactorHeaders
	Request shared.IncreaseReplicationFactorRequest `request:"mediaType=application/json"`
}

type IncreaseReplicationFactorResponse struct {
	ClusterNotFoundFault                 *interface{}
	ContentType                          string
	IncreaseReplicationFactorResponse    *shared.IncreaseReplicationFactorResponse
	InsufficientClusterCapacityFault     *interface{}
	InvalidClusterStateFault             *interface{}
	InvalidParameterCombinationException *interface{}
	InvalidParameterValueException       *interface{}
	InvalidVpcNetworkStateFault          *interface{}
	NodeQuotaForClusterExceededFault     *interface{}
	NodeQuotaForCustomerExceededFault    *interface{}
	ServiceLinkedRoleNotFoundFault       *interface{}
	StatusCode                           int64
}
