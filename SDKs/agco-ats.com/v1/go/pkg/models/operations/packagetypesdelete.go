package operations



type PackageTypesDeletePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=ID"`
    
}

type PackageTypesDeleteRequest struct {
    PathParams PackageTypesDeletePathParams 
    
}

type PackageTypesDeleteResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

