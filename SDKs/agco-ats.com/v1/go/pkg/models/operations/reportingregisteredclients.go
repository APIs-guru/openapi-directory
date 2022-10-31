package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ReportingRegisteredClientsQueryParams struct {
	ClientID            *string    `queryParam:"style=form,explode=true,name=ClientID"`
	LastCheckInAfter    *time.Time `queryParam:"style=form,explode=true,name=LastCheckInAfter"`
	LastCheckInBefore   *time.Time `queryParam:"style=form,explode=true,name=LastCheckInBefore"`
	OrderBy             *string    `queryParam:"style=form,explode=true,name=OrderBy"`
	ReportResult        *string    `queryParam:"style=form,explode=true,name=ReportResult"`
	ReportResultIsValid *bool      `queryParam:"style=form,explode=true,name=ReportResultIsValid"`
	ReportValue         *string    `queryParam:"style=form,explode=true,name=ReportValue"`
	Tag                 *string    `queryParam:"style=form,explode=true,name=Tag"`
	UpdateGroupID       *string    `queryParam:"style=form,explode=true,name=UpdateGroupID"`
	Limit               *int32     `queryParam:"style=form,explode=true,name=limit"`
	Offset              *int32     `queryParam:"style=form,explode=true,name=offset"`
}

type ReportingRegisteredClientsRequest struct {
	QueryParams ReportingRegisteredClientsQueryParams
}

type ReportingRegisteredClientsResponse struct {
	APIModelsAPIError                                                                         *shared.APIModelsAPIError
	APIPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata *shared.APIPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata
	ContentType                                                                               string
	StatusCode                                                                                int64
}
