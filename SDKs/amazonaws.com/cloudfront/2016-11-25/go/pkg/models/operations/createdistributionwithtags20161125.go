package operations



type CreateDistributionWithTags20161125QueryParams struct {
    WithTags bool `queryParam:"style=form,explode=true,name=WithTags"`
    
}

type CreateDistributionWithTags20161125Headers struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateDistributionWithTags20161125Request struct {
    QueryParams CreateDistributionWithTags20161125QueryParams 
    Headers CreateDistributionWithTags20161125Headers 
    Request []byte `request:"mediaType=text/xml"`
    
}

type CreateDistributionWithTags20161125Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

