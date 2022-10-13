package operations

import (
	"openapi/pkg/models/shared"
)

type ListDeploymentConfigsQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListDeploymentConfigsXAmzTargetEnum string

const (
	ListDeploymentConfigsXAmzTargetEnumCodeDeploy20141006ListDeploymentConfigs ListDeploymentConfigsXAmzTargetEnum = "CodeDeploy_20141006.ListDeploymentConfigs"
)

type ListDeploymentConfigsHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDeploymentConfigsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListDeploymentConfigsRequest struct {
	QueryParams ListDeploymentConfigsQueryParams
	Headers     ListDeploymentConfigsHeaders
	Request     shared.ListDeploymentConfigsInput `request:"mediaType=application/json"`
}

type ListDeploymentConfigsResponse struct {
	ContentType                 string
	InvalidNextTokenException   *interface{}
	ListDeploymentConfigsOutput *shared.ListDeploymentConfigsOutput
	StatusCode                  int64
}
