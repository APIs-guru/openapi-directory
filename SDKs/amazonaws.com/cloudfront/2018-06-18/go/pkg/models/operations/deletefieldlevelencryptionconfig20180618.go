package operations



type DeleteFieldLevelEncryptionConfig20180618PathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=Id"`
    
}

type DeleteFieldLevelEncryptionConfig20180618Headers struct {
    IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteFieldLevelEncryptionConfig20180618Request struct {
    PathParams DeleteFieldLevelEncryptionConfig20180618PathParams 
    Headers DeleteFieldLevelEncryptionConfig20180618Headers 
    
}

type DeleteFieldLevelEncryptionConfig20180618Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

