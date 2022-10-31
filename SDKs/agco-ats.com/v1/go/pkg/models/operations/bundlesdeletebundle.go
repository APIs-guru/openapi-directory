package operations



type BundlesDeleteBundlePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=ID"`
    
}

type BundlesDeleteBundleRequest struct {
    PathParams BundlesDeleteBundlePathParams 
    
}

type BundlesDeleteBundleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

