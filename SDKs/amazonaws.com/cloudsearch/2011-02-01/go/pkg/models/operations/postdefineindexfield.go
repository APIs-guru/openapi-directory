package operations




type PostDefineIndexFieldActionEnum string

const (
    PostDefineIndexFieldActionEnumDefineIndexField PostDefineIndexFieldActionEnum = "DefineIndexField"
)



type PostDefineIndexFieldVersionEnum string

const (
    PostDefineIndexFieldVersionEnumTwoThousandAndEleven0201 PostDefineIndexFieldVersionEnum = "2011-02-01"
)


type PostDefineIndexFieldQueryParams struct {
    Action PostDefineIndexFieldActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDefineIndexFieldVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDefineIndexFieldHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDefineIndexFieldRequest struct {
    QueryParams PostDefineIndexFieldQueryParams 
    Headers PostDefineIndexFieldHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDefineIndexFieldResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

