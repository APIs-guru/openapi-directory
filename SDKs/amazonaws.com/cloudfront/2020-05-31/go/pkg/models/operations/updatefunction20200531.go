package operations



type UpdateFunction20200531PathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=Name"`
    
}

type UpdateFunction20200531Headers struct {
    IfMatch string `header:"style=simple,explode=false,name=If-Match"`
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateFunction20200531Request struct {
    PathParams UpdateFunction20200531PathParams 
    Headers UpdateFunction20200531Headers 
    Request []byte `request:"mediaType=text/xml"`
    
}

type UpdateFunction20200531Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

