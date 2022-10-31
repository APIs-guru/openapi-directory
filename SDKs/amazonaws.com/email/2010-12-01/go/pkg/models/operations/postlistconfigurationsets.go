package operations




type PostListConfigurationSetsActionEnum string

const (
    PostListConfigurationSetsActionEnumListConfigurationSets PostListConfigurationSetsActionEnum = "ListConfigurationSets"
)



type PostListConfigurationSetsVersionEnum string

const (
    PostListConfigurationSetsVersionEnumTwoThousandAndTen1201 PostListConfigurationSetsVersionEnum = "2010-12-01"
)


type PostListConfigurationSetsQueryParams struct {
    Action PostListConfigurationSetsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostListConfigurationSetsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostListConfigurationSetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostListConfigurationSetsRequest struct {
    QueryParams PostListConfigurationSetsQueryParams 
    Headers PostListConfigurationSetsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostListConfigurationSetsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

