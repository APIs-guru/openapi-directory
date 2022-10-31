package operations




type PostDeleteSuggesterActionEnum string

const (
    PostDeleteSuggesterActionEnumDeleteSuggester PostDeleteSuggesterActionEnum = "DeleteSuggester"
)



type PostDeleteSuggesterVersionEnum string

const (
    PostDeleteSuggesterVersionEnumTwoThousandAndThirteen0101 PostDeleteSuggesterVersionEnum = "2013-01-01"
)


type PostDeleteSuggesterQueryParams struct {
    Action PostDeleteSuggesterActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteSuggesterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteSuggesterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteSuggesterRequest struct {
    QueryParams PostDeleteSuggesterQueryParams 
    Headers PostDeleteSuggesterHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteSuggesterResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

