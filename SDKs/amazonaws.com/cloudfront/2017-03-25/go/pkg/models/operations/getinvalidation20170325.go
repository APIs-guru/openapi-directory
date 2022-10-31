package operations



type GetInvalidation20170325PathParams struct {
    DistributionID string `pathParam:"style=simple,explode=false,name=DistributionId"`
    ID string `pathParam:"style=simple,explode=false,name=Id"`
    
}

type GetInvalidation20170325Headers struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetInvalidation20170325Request struct {
    PathParams GetInvalidation20170325PathParams 
    Headers GetInvalidation20170325Headers 
    
}

type GetInvalidation20170325Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

