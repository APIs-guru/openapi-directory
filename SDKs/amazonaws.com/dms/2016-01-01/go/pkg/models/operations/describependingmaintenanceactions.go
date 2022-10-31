package operations

import (
	"openapi/pkg/models/shared"
)

type DescribePendingMaintenanceActionsQueryParams struct {
	Marker     *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
}

type DescribePendingMaintenanceActionsXAmzTargetEnum string

const (
	DescribePendingMaintenanceActionsXAmzTargetEnumAmazonDmSv20160101DescribePendingMaintenanceActions DescribePendingMaintenanceActionsXAmzTargetEnum = "AmazonDMSv20160101.DescribePendingMaintenanceActions"
)

type DescribePendingMaintenanceActionsHeaders struct {
	XAmzAlgorithm     *string                                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribePendingMaintenanceActionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribePendingMaintenanceActionsRequest struct {
	QueryParams DescribePendingMaintenanceActionsQueryParams
	Headers     DescribePendingMaintenanceActionsHeaders
	Request     shared.DescribePendingMaintenanceActionsMessage `request:"mediaType=application/json"`
}

type DescribePendingMaintenanceActionsResponse struct {
	ContentType                               string
	DescribePendingMaintenanceActionsResponse *shared.DescribePendingMaintenanceActionsResponse
	ResourceNotFoundFault                     *interface{}
	StatusCode                                int64
}
