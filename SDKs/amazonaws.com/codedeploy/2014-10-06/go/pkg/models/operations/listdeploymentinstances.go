package operations

import (
	"openapi/pkg/models/shared"
)

type ListDeploymentInstancesQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListDeploymentInstancesXAmzTargetEnum string

const (
	ListDeploymentInstancesXAmzTargetEnumCodeDeploy20141006ListDeploymentInstances ListDeploymentInstancesXAmzTargetEnum = "CodeDeploy_20141006.ListDeploymentInstances"
)

type ListDeploymentInstancesHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDeploymentInstancesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListDeploymentInstancesRequest struct {
	QueryParams ListDeploymentInstancesQueryParams
	Headers     ListDeploymentInstancesHeaders
	Request     shared.ListDeploymentInstancesInput `request:"mediaType=application/json"`
}

type ListDeploymentInstancesResponse struct {
	ContentType                            string
	DeploymentDoesNotExistException        *interface{}
	DeploymentIDRequiredException          *interface{}
	DeploymentNotStartedException          *interface{}
	InvalidComputePlatformException        *interface{}
	InvalidDeploymentIDException           *interface{}
	InvalidDeploymentInstanceTypeException *interface{}
	InvalidInstanceStatusException         *interface{}
	InvalidInstanceTypeException           *interface{}
	InvalidNextTokenException              *interface{}
	InvalidTargetFilterNameException       *interface{}
	ListDeploymentInstancesOutput          *shared.ListDeploymentInstancesOutput
	StatusCode                             int64
}
