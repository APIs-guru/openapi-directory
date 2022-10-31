package operations



type GetPackageFilterPathParams struct {
    Group string `pathParam:"style=simple,explode=false,name=group"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    Version string `pathParam:"style=simple,explode=false,name=version"`
    
}

type GetPackageFilterRequest struct {
    PathParams GetPackageFilterPathParams 
    
}

type GetPackageFilterResponse struct {
    ContentType string 
    StatusCode int64 
    GetPackageFilterDefaultApplicationJSONString *string 
    
}

