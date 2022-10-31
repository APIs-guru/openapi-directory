package operations



type PostPackageServiceJSONPathParams struct {
    Path string `pathParam:"style=simple,explode=false,name=path"`
    
}

type PostPackageServiceJSONQueryParams struct {
    Charset *string `queryParam:"style=form,explode=true,name=_charset_"`
    Cmd string `queryParam:"style=form,explode=true,name=cmd"`
    Force *bool `queryParam:"style=form,explode=true,name=force"`
    GroupName *string `queryParam:"style=form,explode=true,name=groupName"`
    PackageName *string `queryParam:"style=form,explode=true,name=packageName"`
    PackageVersion *string `queryParam:"style=form,explode=true,name=packageVersion"`
    Recursive *bool `queryParam:"style=form,explode=true,name=recursive"`
    
}

type PostPackageServiceJSONRequestBodyPackage struct {
    Content []byte `multipartForm:"content"`
    Package string `multipartForm:"name=package"`
    
}

type PostPackageServiceJSONRequestBody struct {
    Package *PostPackageServiceJSONRequestBodyPackage `multipartForm:"file"`
    
}

type PostPackageServiceJSONRequest struct {
    PathParams PostPackageServiceJSONPathParams 
    QueryParams PostPackageServiceJSONQueryParams 
    Request *PostPackageServiceJSONRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PostPackageServiceJSONResponse struct {
    ContentType string 
    StatusCode int64 
    PostPackageServiceJSONDefaultApplicationJSONString *string 
    
}

