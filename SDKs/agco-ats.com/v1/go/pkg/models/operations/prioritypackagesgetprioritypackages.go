package operations

import (
	"openapi/pkg/models/shared"
)

type PriorityPackagesGetPriorityPackagesStatusEnum string

const (
	PriorityPackagesGetPriorityPackagesStatusEnumActive    PriorityPackagesGetPriorityPackagesStatusEnum = "Active"
	PriorityPackagesGetPriorityPackagesStatusEnumCompleted PriorityPackagesGetPriorityPackagesStatusEnum = "Completed"
	PriorityPackagesGetPriorityPackagesStatusEnumAll       PriorityPackagesGetPriorityPackagesStatusEnum = "All"
)

type PriorityPackagesGetPriorityPackagesQueryParams struct {
	ClientID *string                                        `queryParam:"style=form,explode=true,name=ClientID"`
	Status   *PriorityPackagesGetPriorityPackagesStatusEnum `queryParam:"style=form,explode=true,name=Status"`
	Limit    *int32                                         `queryParam:"style=form,explode=true,name=limit"`
	Offset   *int32                                         `queryParam:"style=form,explode=true,name=offset"`
}

type PriorityPackagesGetPriorityPackagesRequest struct {
	QueryParams PriorityPackagesGetPriorityPackagesQueryParams
}

type PriorityPackagesGetPriorityPackagesResponse struct {
	APIModelsAPIError                                 *shared.APIModelsAPIError
	APIPagedResponseUpdateSystemModelsPriorityPackage *shared.APIPagedResponseUpdateSystemModelsPriorityPackage
	ContentType                                       string
	StatusCode                                        int64
}
