package operations



type PostPackageUpdateQueryParams struct {
    Charset *string `queryParam:"style=form,explode=true,name=_charset_"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    GroupName string `queryParam:"style=form,explode=true,name=groupName"`
    PackageName string `queryParam:"style=form,explode=true,name=packageName"`
    Path string `queryParam:"style=form,explode=true,name=path"`
    Version string `queryParam:"style=form,explode=true,name=version"`
    
}

type PostPackageUpdateRequest struct {
    QueryParams PostPackageUpdateQueryParams 
    
}

type PostPackageUpdateResponse struct {
    ContentType string 
    StatusCode int64 
    PostPackageUpdateDefaultApplicationJSONString *string 
    
}

