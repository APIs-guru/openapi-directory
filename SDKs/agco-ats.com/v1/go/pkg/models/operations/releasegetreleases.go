package operations

import (
"openapi/pkg/models/shared")

type ReleaseGetReleasesQueryParams struct {
    BundleID *string `queryParam:"style=form,explode=true,name=bundleID"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    Visible *bool `queryParam:"style=form,explode=true,name=visible"`
    
}

type ReleaseGetReleasesRequest struct {
    QueryParams ReleaseGetReleasesQueryParams 
    
}

type ReleaseGetReleasesResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    APIPagedResponseContentSubmissionSharedBusinessEntitiesRelease *shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesRelease 
    ContentType string 
    StatusCode int64 
    
}

