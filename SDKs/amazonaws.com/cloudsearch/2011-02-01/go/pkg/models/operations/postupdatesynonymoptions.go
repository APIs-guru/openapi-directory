package operations




type PostUpdateSynonymOptionsActionEnum string

const (
    PostUpdateSynonymOptionsActionEnumUpdateSynonymOptions PostUpdateSynonymOptionsActionEnum = "UpdateSynonymOptions"
)



type PostUpdateSynonymOptionsVersionEnum string

const (
    PostUpdateSynonymOptionsVersionEnumTwoThousandAndEleven0201 PostUpdateSynonymOptionsVersionEnum = "2011-02-01"
)


type PostUpdateSynonymOptionsQueryParams struct {
    Action PostUpdateSynonymOptionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostUpdateSynonymOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostUpdateSynonymOptionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostUpdateSynonymOptionsRequest struct {
    QueryParams PostUpdateSynonymOptionsQueryParams 
    Headers PostUpdateSynonymOptionsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostUpdateSynonymOptionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

