package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateClusterXAmzTargetEnum string

const (
	UpdateClusterXAmzTargetEnumAmazonDaxv3UpdateCluster UpdateClusterXAmzTargetEnum = "AmazonDAXV3.UpdateCluster"
)

type UpdateClusterHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateClusterXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateClusterRequest struct {
	Headers UpdateClusterHeaders
	Request shared.UpdateClusterRequest `request:"mediaType=application/json"`
}

type UpdateClusterResponse struct {
	ClusterNotFoundFault                 *interface{}
	ContentType                          string
	InvalidClusterStateFault             *interface{}
	InvalidParameterCombinationException *interface{}
	InvalidParameterGroupStateFault      *interface{}
	InvalidParameterValueException       *interface{}
	ParameterGroupNotFoundFault          *interface{}
	ServiceLinkedRoleNotFoundFault       *interface{}
	StatusCode                           int64
	UpdateClusterResponse                *shared.UpdateClusterResponse
}
