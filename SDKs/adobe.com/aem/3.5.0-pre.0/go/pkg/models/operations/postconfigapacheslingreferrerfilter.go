package operations



type PostConfigApacheSlingReferrerFilterQueryParams struct {
    AllowEmpty *bool `queryParam:"style=form,explode=true,name=allow.empty"`
    AllowEmptyAtTypeHint *string `queryParam:"style=form,explode=true,name=allow.empty@TypeHint"`
    AllowHosts *string `queryParam:"style=form,explode=true,name=allow.hosts"`
    AllowHostsRegexp *string `queryParam:"style=form,explode=true,name=allow.hosts.regexp"`
    AllowHostsRegexpAtTypeHint *string `queryParam:"style=form,explode=true,name=allow.hosts.regexp@TypeHint"`
    AllowHostsAtTypeHint *string `queryParam:"style=form,explode=true,name=allow.hosts@TypeHint"`
    FilterMethods *string `queryParam:"style=form,explode=true,name=filter.methods"`
    FilterMethodsAtTypeHint *string `queryParam:"style=form,explode=true,name=filter.methods@TypeHint"`
    
}

type PostConfigApacheSlingReferrerFilterRequest struct {
    QueryParams PostConfigApacheSlingReferrerFilterQueryParams 
    
}

type PostConfigApacheSlingReferrerFilterResponse struct {
    ContentType string 
    StatusCode int64 
    
}

