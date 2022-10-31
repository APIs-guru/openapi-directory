package operations

import (
	"openapi/pkg/models/shared"
)

type ListDeploymentGroupsQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListDeploymentGroupsXAmzTargetEnum string

const (
	ListDeploymentGroupsXAmzTargetEnumCodeDeploy20141006ListDeploymentGroups ListDeploymentGroupsXAmzTargetEnum = "CodeDeploy_20141006.ListDeploymentGroups"
)

type ListDeploymentGroupsHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDeploymentGroupsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListDeploymentGroupsRequest struct {
	QueryParams ListDeploymentGroupsQueryParams
	Headers     ListDeploymentGroupsHeaders
	Request     shared.ListDeploymentGroupsInput `request:"mediaType=application/json"`
}

type ListDeploymentGroupsResponse struct {
	ApplicationDoesNotExistException *interface{}
	ApplicationNameRequiredException *interface{}
	ContentType                      string
	InvalidApplicationNameException  *interface{}
	InvalidNextTokenException        *interface{}
	ListDeploymentGroupsOutput       *shared.ListDeploymentGroupsOutput
	StatusCode                       int64
}
