package operations

import (
	"openapi/pkg/models/shared"
)

type ListQueryExecutionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListQueryExecutionsXAmzTargetEnum string

const (
	ListQueryExecutionsXAmzTargetEnumAmazonAthenaListQueryExecutions ListQueryExecutionsXAmzTargetEnum = "AmazonAthena.ListQueryExecutions"
)

type ListQueryExecutionsHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListQueryExecutionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListQueryExecutionsRequest struct {
	QueryParams ListQueryExecutionsQueryParams
	Headers     ListQueryExecutionsHeaders
	Request     shared.ListQueryExecutionsInput `request:"mediaType=application/json"`
}

type ListQueryExecutionsResponse struct {
	ContentType               string
	InternalServerException   *interface{}
	InvalidRequestException   *interface{}
	ListQueryExecutionsOutput *shared.ListQueryExecutionsOutput
	StatusCode                int64
}
