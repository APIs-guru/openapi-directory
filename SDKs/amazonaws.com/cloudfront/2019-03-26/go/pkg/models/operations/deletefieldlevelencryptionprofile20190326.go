package operations



type DeleteFieldLevelEncryptionProfile20190326PathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=Id"`
    
}

type DeleteFieldLevelEncryptionProfile20190326Headers struct {
    IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteFieldLevelEncryptionProfile20190326Request struct {
    PathParams DeleteFieldLevelEncryptionProfile20190326PathParams 
    Headers DeleteFieldLevelEncryptionProfile20190326Headers 
    
}

type DeleteFieldLevelEncryptionProfile20190326Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

