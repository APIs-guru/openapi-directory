package operations



type PostPackageServiceQueryParams struct {
    Cmd string `queryParam:"style=form,explode=true,name=cmd"`
    
}

type PostPackageServiceRequest struct {
    QueryParams PostPackageServiceQueryParams 
    
}

type PostPackageServiceResponse struct {
    ContentType string 
    StatusCode int64 
    PostPackageServiceDefaultTextXMLString *string 
    
}

