package operations



type GetPackagePathParams struct {
    Group string `pathParam:"style=simple,explode=false,name=group"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    Version string `pathParam:"style=simple,explode=false,name=version"`
    
}

type GetPackageRequest struct {
    PathParams GetPackagePathParams 
    
}

type GetPackageResponse struct {
    ContentType string 
    StatusCode int64 
    GetPackageDefaultApplicationOctetStreamBinaryString []byte 
    
}

