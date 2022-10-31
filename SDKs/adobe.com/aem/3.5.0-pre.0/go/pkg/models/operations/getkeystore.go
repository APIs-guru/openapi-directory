package operations



type GetKeystorePathParams struct {
    AuthorizableID string `pathParam:"style=simple,explode=false,name=authorizableId"`
    IntermediatePath string `pathParam:"style=simple,explode=false,name=intermediatePath"`
    
}

type GetKeystoreRequest struct {
    PathParams GetKeystorePathParams 
    
}

type GetKeystoreResponse struct {
    ContentType string 
    StatusCode int64 
    GetKeystoreDefaultApplicationOctetStreamBinaryString []byte 
    
}

