package operations



type CreateInvalidation20161125PathParams struct {
    DistributionID string `pathParam:"style=simple,explode=false,name=DistributionId"`
    
}

type CreateInvalidation20161125Headers struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateInvalidation20161125Request struct {
    PathParams CreateInvalidation20161125PathParams 
    Headers CreateInvalidation20161125Headers 
    Request []byte `request:"mediaType=text/xml"`
    
}

type CreateInvalidation20161125Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

