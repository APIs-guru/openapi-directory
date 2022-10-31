package operations



type CreateStreamingDistributionWithTags20181105QueryParams struct {
    WithTags bool `queryParam:"style=form,explode=true,name=WithTags"`
    
}

type CreateStreamingDistributionWithTags20181105Headers struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateStreamingDistributionWithTags20181105Request struct {
    QueryParams CreateStreamingDistributionWithTags20181105QueryParams 
    Headers CreateStreamingDistributionWithTags20181105Headers 
    Request []byte `request:"mediaType=text/xml"`
    
}

type CreateStreamingDistributionWithTags20181105Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

