package operations




type PostGetSamlProviderActionEnum string

const (
    PostGetSamlProviderActionEnumGetSamlProvider PostGetSamlProviderActionEnum = "GetSAMLProvider"
)



type PostGetSamlProviderVersionEnum string

const (
    PostGetSamlProviderVersionEnumTwoThousandAndTen0508 PostGetSamlProviderVersionEnum = "2010-05-08"
)


type PostGetSamlProviderQueryParams struct {
    Action PostGetSamlProviderActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostGetSamlProviderVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostGetSamlProviderHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostGetSamlProviderRequest struct {
    QueryParams PostGetSamlProviderQueryParams 
    Headers PostGetSamlProviderHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostGetSamlProviderResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

