package operations

import (
	"openapi/pkg/models/shared"
)

type DecreaseReplicationFactorXAmzTargetEnum string

const (
	DecreaseReplicationFactorXAmzTargetEnumAmazonDaxv3DecreaseReplicationFactor DecreaseReplicationFactorXAmzTargetEnum = "AmazonDAXV3.DecreaseReplicationFactor"
)

type DecreaseReplicationFactorHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DecreaseReplicationFactorXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
