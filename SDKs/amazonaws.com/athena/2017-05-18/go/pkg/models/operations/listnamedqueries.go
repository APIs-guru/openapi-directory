package operations

import (
	"openapi/pkg/models/shared"
)

type ListNamedQueriesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListNamedQueriesXAmzTargetEnum string

const (
	ListNamedQueriesXAmzTargetEnumAmazonAthenaListNamedQueries ListNamedQueriesXAmzTargetEnum = "AmazonAthena.ListNamedQueries"
)

type ListNamedQueriesHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListNamedQueriesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListNamedQueriesRequest struct {
	QueryParams ListNamedQueriesQueryParams
	Headers     ListNamedQueriesHeaders
	Request     shared.ListNamedQueriesInput `request:"mediaType=application/json"`
}

type ListNamedQueriesResponse struct {
	ContentType             string
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	ListNamedQueriesOutput  *shared.ListNamedQueriesOutput
	StatusCode              int64
}
