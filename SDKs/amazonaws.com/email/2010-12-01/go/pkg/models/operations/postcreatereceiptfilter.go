package operations




type PostCreateReceiptFilterActionEnum string

const (
    PostCreateReceiptFilterActionEnumCreateReceiptFilter PostCreateReceiptFilterActionEnum = "CreateReceiptFilter"
)



type PostCreateReceiptFilterVersionEnum string

const (
    PostCreateReceiptFilterVersionEnumTwoThousandAndTen1201 PostCreateReceiptFilterVersionEnum = "2010-12-01"
)


type PostCreateReceiptFilterQueryParams struct {
    Action PostCreateReceiptFilterActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateReceiptFilterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateReceiptFilterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateReceiptFilterRequest struct {
    QueryParams PostCreateReceiptFilterQueryParams 
    Headers PostCreateReceiptFilterHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateReceiptFilterResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

