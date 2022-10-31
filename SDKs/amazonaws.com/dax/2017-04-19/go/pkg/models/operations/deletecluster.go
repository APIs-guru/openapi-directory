package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteClusterXAmzTargetEnum string

const (
	DeleteClusterXAmzTargetEnumAmazonDaxv3DeleteCluster DeleteClusterXAmzTargetEnum = "AmazonDAXV3.DeleteCluster"
)

type DeleteClusterHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteClusterXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteClusterRequest struct {
	Headers DeleteClusterHeaders
	Request shared.DeleteClusterRequest `request:"mediaType=application/json"`
}

type DeleteClusterResponse struct {
	ClusterNotFoundFault                 *interface{}
	ContentType                          string
	DeleteClusterResponse                *shared.DeleteClusterResponse
	InvalidClusterStateFault             *interface{}
	InvalidParameterCombinationException *interface{}
	InvalidParameterValueException       *interface{}
	ServiceLinkedRoleNotFoundFault       *interface{}
	StatusCode                           int64
}
