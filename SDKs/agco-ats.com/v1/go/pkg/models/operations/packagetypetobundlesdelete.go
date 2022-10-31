package operations



type PackageTypetoBundlesDeleteQueryParams struct {
    BundleID string `queryParam:"style=form,explode=true,name=BundleID"`
    PackageTypeID string `queryParam:"style=form,explode=true,name=PackageTypeID"`
    
}

type PackageTypetoBundlesDeleteRequest struct {
    QueryParams PackageTypetoBundlesDeleteQueryParams 
    
}

type PackageTypetoBundlesDeleteResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

