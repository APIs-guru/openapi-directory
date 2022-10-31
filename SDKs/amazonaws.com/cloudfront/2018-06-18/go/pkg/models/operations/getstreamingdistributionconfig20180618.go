package operations



type GetStreamingDistributionConfig20180618PathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=Id"`
    
}

type GetStreamingDistributionConfig20180618Headers struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetStreamingDistributionConfig20180618Request struct {
    PathParams GetStreamingDistributionConfig20180618PathParams 
    Headers GetStreamingDistributionConfig20180618Headers 
    
}

type GetStreamingDistributionConfig20180618Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

