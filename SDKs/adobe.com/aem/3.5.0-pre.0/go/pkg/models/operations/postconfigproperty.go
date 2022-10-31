package operations



type PostConfigPropertyPathParams struct {
    ConfigNodeName string `pathParam:"style=simple,explode=false,name=configNodeName"`
    
}

type PostConfigPropertyRequest struct {
    PathParams PostConfigPropertyPathParams 
    
}

type PostConfigPropertyResponse struct {
    ContentType string 
    StatusCode int64 
    
}

