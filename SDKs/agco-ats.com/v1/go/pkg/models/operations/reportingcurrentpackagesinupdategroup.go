package operations

import (
	"openapi/pkg/models/shared"
)

type ReportingCurrentPackagesInUpdateGroupSubscriptionTypeFilterEnum string

const (
	ReportingCurrentPackagesInUpdateGroupSubscriptionTypeFilterEnumRequiredOnly ReportingCurrentPackagesInUpdateGroupSubscriptionTypeFilterEnum = "RequiredOnly"
	ReportingCurrentPackagesInUpdateGroupSubscriptionTypeFilterEnumDefault      ReportingCurrentPackagesInUpdateGroupSubscriptionTypeFilterEnum = "Default"
	ReportingCurrentPackagesInUpdateGroupSubscriptionTypeFilterEnumAll          ReportingCurrentPackagesInUpdateGroupSubscriptionTypeFilterEnum = "All"
)

type ReportingCurrentPackagesInUpdateGroupQueryParams struct {
	ID                     string                                                           `queryParam:"style=form,explode=true,name=ID"`
	SubscriptionTypeFilter *ReportingCurrentPackagesInUpdateGroupSubscriptionTypeFilterEnum `queryParam:"style=form,explode=true,name=SubscriptionTypeFilter"`
}

type ReportingCurrentPackagesInUpdateGroupRequest struct {
	QueryParams ReportingCurrentPackagesInUpdateGroupQueryParams
}

type ReportingCurrentPackagesInUpdateGroupResponse struct {
	APIModelsAPIError          *shared.APIModelsAPIError
	Body                       []byte
	ContentType                string
	StatusCode                 int64
	UpdateSystemModelsPackages []shared.UpdateSystemModelsPackage
}
