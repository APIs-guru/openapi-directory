package operations



type DeleteDistribution20181105PathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=Id"`
    
}

type DeleteDistribution20181105Headers struct {
    IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteDistribution20181105Request struct {
    PathParams DeleteDistribution20181105PathParams 
    Headers DeleteDistribution20181105Headers 
    
}

type DeleteDistribution20181105Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

