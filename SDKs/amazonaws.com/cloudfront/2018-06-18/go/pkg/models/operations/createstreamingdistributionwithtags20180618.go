package operations



type CreateStreamingDistributionWithTags20180618QueryParams struct {
    WithTags bool `queryParam:"style=form,explode=true,name=WithTags"`
    
}

type CreateStreamingDistributionWithTags20180618Headers struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateStreamingDistributionWithTags20180618Request struct {
    QueryParams CreateStreamingDistributionWithTags20180618QueryParams 
    Headers CreateStreamingDistributionWithTags20180618Headers 
    Request []byte `request:"mediaType=text/xml"`
    
}

type CreateStreamingDistributionWithTags20180618Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

