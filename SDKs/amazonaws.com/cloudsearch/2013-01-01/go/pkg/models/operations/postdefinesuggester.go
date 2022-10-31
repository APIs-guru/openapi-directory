package operations




type PostDefineSuggesterActionEnum string

const (
    PostDefineSuggesterActionEnumDefineSuggester PostDefineSuggesterActionEnum = "DefineSuggester"
)



type PostDefineSuggesterVersionEnum string

const (
    PostDefineSuggesterVersionEnumTwoThousandAndThirteen0101 PostDefineSuggesterVersionEnum = "2013-01-01"
)


type PostDefineSuggesterQueryParams struct {
    Action PostDefineSuggesterActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDefineSuggesterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDefineSuggesterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDefineSuggesterRequest struct {
    QueryParams PostDefineSuggesterQueryParams 
    Headers PostDefineSuggesterHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDefineSuggesterResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

