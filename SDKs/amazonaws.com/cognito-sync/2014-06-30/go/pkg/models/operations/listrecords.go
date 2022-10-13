package operations

import (
	"openapi/pkg/models/shared"
)

type ListRecordsPathParams struct {
	DatasetName    string `pathParam:"style=simple,explode=false,name=DatasetName"`
	IdentityID     string `pathParam:"style=simple,explode=false,name=IdentityId"`
	IdentityPoolID string `pathParam:"style=simple,explode=false,name=IdentityPoolId"`
}

type ListRecordsQueryParams struct {
	LastSyncCount    *int64  `queryParam:"style=form,explode=true,name=lastSyncCount"`
	MaxResults       *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken        *string `queryParam:"style=form,explode=true,name=nextToken"`
	SyncSessionToken *string `queryParam:"style=form,explode=true,name=syncSessionToken"`
}

type ListRecordsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListRecordsRequest struct {
	PathParams  ListRecordsPathParams
	QueryParams ListRecordsQueryParams
	Headers     ListRecordsHeaders
}

type ListRecordsResponse struct {
	ContentType               string
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	ListRecordsResponse       *shared.ListRecordsResponse
	NotAuthorizedException    *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
