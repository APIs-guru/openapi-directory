package operations



type GetPublicKey20180618PathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=Id"`
    
}

type GetPublicKey20180618Headers struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetPublicKey20180618Request struct {
    PathParams GetPublicKey20180618PathParams 
    Headers GetPublicKey20180618Headers 
    
}

type GetPublicKey20180618Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

