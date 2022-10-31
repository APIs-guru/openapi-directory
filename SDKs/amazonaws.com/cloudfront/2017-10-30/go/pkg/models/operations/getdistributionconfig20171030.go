package operations



type GetDistributionConfig20171030PathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=Id"`
    
}

type GetDistributionConfig20171030Headers struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDistributionConfig20171030Request struct {
    PathParams GetDistributionConfig20171030PathParams 
    Headers GetDistributionConfig20171030Headers 
    
}

type GetDistributionConfig20171030Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

