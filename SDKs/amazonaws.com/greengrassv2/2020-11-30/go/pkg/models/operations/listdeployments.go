package operations

import (
	"openapi/pkg/models/shared"
)

type ListDeploymentsHistoryFilterEnum string

const (
	ListDeploymentsHistoryFilterEnumAll        ListDeploymentsHistoryFilterEnum = "ALL"
	ListDeploymentsHistoryFilterEnumLatestOnly ListDeploymentsHistoryFilterEnum = "LATEST_ONLY"
)

type ListDeploymentsQueryParams struct {
	HistoryFilter *ListDeploymentsHistoryFilterEnum `queryParam:"style=form,explode=true,name=historyFilter"`
	MaxResults    *int64                            `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken     *string                           `queryParam:"style=form,explode=true,name=nextToken"`
	TargetArn     *string                           `queryParam:"style=form,explode=true,name=targetArn"`
}

type ListDeploymentsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListDeploymentsRequest struct {
	QueryParams ListDeploymentsQueryParams
	Headers     ListDeploymentsHeaders
}

type ListDeploymentsResponse struct {
	AccessDeniedException   *interface{}
	ContentType             string
	InternalServerException *interface{}
	ListDeploymentsResponse *shared.ListDeploymentsResponse
	StatusCode              int64
	ThrottlingException     *interface{}
	ValidationException     *interface{}
}
