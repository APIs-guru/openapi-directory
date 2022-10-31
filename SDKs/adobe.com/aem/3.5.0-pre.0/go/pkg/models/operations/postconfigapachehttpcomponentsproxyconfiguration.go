package operations



type PostConfigApacheHTTPComponentsProxyConfigurationQueryParams struct {
    ProxyEnabled *bool `queryParam:"style=form,explode=true,name=proxy.enabled"`
    ProxyEnabledAtTypeHint *string `queryParam:"style=form,explode=true,name=proxy.enabled@TypeHint"`
    ProxyExceptions []string `queryParam:"style=form,explode=true,name=proxy.exceptions"`
    ProxyExceptionsAtTypeHint *string `queryParam:"style=form,explode=true,name=proxy.exceptions@TypeHint"`
    ProxyHost *string `queryParam:"style=form,explode=true,name=proxy.host"`
    ProxyHostAtTypeHint *string `queryParam:"style=form,explode=true,name=proxy.host@TypeHint"`
    ProxyPassword *string `queryParam:"style=form,explode=true,name=proxy.password"`
    ProxyPasswordAtTypeHint *string `queryParam:"style=form,explode=true,name=proxy.password@TypeHint"`
    ProxyPort *int64 `queryParam:"style=form,explode=true,name=proxy.port"`
    ProxyPortAtTypeHint *string `queryParam:"style=form,explode=true,name=proxy.port@TypeHint"`
    ProxyUser *string `queryParam:"style=form,explode=true,name=proxy.user"`
    ProxyUserAtTypeHint *string `queryParam:"style=form,explode=true,name=proxy.user@TypeHint"`
    
}

type PostConfigApacheHTTPComponentsProxyConfigurationRequest struct {
    QueryParams PostConfigApacheHTTPComponentsProxyConfigurationQueryParams 
    
}

type PostConfigApacheHTTPComponentsProxyConfigurationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

