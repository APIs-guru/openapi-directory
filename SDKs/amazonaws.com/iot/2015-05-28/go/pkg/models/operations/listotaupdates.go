package operations

import (
	"openapi/pkg/models/shared"
)

type ListOtaUpdatesOtaUpdateStatusEnum string

const (
	ListOtaUpdatesOtaUpdateStatusEnumCreatePending    ListOtaUpdatesOtaUpdateStatusEnum = "CREATE_PENDING"
	ListOtaUpdatesOtaUpdateStatusEnumCreateInProgress ListOtaUpdatesOtaUpdateStatusEnum = "CREATE_IN_PROGRESS"
	ListOtaUpdatesOtaUpdateStatusEnumCreateComplete   ListOtaUpdatesOtaUpdateStatusEnum = "CREATE_COMPLETE"
	ListOtaUpdatesOtaUpdateStatusEnumCreateFailed     ListOtaUpdatesOtaUpdateStatusEnum = "CREATE_FAILED"
)

type ListOtaUpdatesQueryParams struct {
	MaxResults      *int64                             `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken       *string                            `queryParam:"style=form,explode=true,name=nextToken"`
	OtaUpdateStatus *ListOtaUpdatesOtaUpdateStatusEnum `queryParam:"style=form,explode=true,name=otaUpdateStatus"`
}

type ListOtaUpdatesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListOtaUpdatesRequest struct {
	QueryParams ListOtaUpdatesQueryParams
	Headers     ListOtaUpdatesHeaders
}

type ListOtaUpdatesResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ListOtaUpdatesResponse      *shared.ListOtaUpdatesResponse
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
}
