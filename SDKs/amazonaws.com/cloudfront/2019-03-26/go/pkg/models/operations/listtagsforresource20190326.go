package operations



type ListTagsForResource20190326QueryParams struct {
    Resource string `queryParam:"style=form,explode=true,name=Resource"`
    
}

type ListTagsForResource20190326Headers struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListTagsForResource20190326Request struct {
    QueryParams ListTagsForResource20190326QueryParams 
    Headers ListTagsForResource20190326Headers 
    
}

type ListTagsForResource20190326Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

