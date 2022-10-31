package operations



type ListTagsForResource20170325QueryParams struct {
    Resource string `queryParam:"style=form,explode=true,name=Resource"`
    
}

type ListTagsForResource20170325Headers struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListTagsForResource20170325Request struct {
    QueryParams ListTagsForResource20170325QueryParams 
    Headers ListTagsForResource20170325Headers 
    
}

type ListTagsForResource20170325Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

