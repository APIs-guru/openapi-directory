package operations

import (
	"openapi/pkg/models/shared"
)

type ListEnvironmentsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListEnvironmentsXAmzTargetEnum string

const (
	ListEnvironmentsXAmzTargetEnumAwsCloud9WorkspaceManagementServiceListEnvironments ListEnvironmentsXAmzTargetEnum = "AWSCloud9WorkspaceManagementService.ListEnvironments"
)

type ListEnvironmentsHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListEnvironmentsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListEnvironmentsRequest struct {
	QueryParams ListEnvironmentsQueryParams
	Headers     ListEnvironmentsHeaders
	Request     shared.ListEnvironmentsRequest `request:"mediaType=application/json"`
}

type ListEnvironmentsResponse struct {
	BadRequestException          *interface{}
	ConflictException            *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	LimitExceededException       *interface{}
	ListEnvironmentsResult       *shared.ListEnvironmentsResult
	NotFoundException            *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
