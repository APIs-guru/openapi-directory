package operations



type GetPublicKey20181105PathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=Id"`
    
}

type GetPublicKey20181105Headers struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetPublicKey20181105Request struct {
    PathParams GetPublicKey20181105PathParams 
    Headers GetPublicKey20181105Headers 
    
}

type GetPublicKey20181105Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

