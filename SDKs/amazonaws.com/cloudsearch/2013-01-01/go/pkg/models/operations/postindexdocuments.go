package operations




type PostIndexDocumentsActionEnum string

const (
    PostIndexDocumentsActionEnumIndexDocuments PostIndexDocumentsActionEnum = "IndexDocuments"
)



type PostIndexDocumentsVersionEnum string

const (
    PostIndexDocumentsVersionEnumTwoThousandAndThirteen0101 PostIndexDocumentsVersionEnum = "2013-01-01"
)


type PostIndexDocumentsQueryParams struct {
    Action PostIndexDocumentsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostIndexDocumentsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostIndexDocumentsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostIndexDocumentsRequest struct {
    QueryParams PostIndexDocumentsQueryParams 
    Headers PostIndexDocumentsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostIndexDocumentsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

