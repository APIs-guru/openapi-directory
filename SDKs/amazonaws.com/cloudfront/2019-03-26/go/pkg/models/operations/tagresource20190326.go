package operations




type TagResource20190326OperationEnum string

const (
    TagResource20190326OperationEnumTag TagResource20190326OperationEnum = "Tag"
)


type TagResource20190326QueryParams struct {
    Operation TagResource20190326OperationEnum `queryParam:"style=form,explode=true,name=Operation"`
    Resource string `queryParam:"style=form,explode=true,name=Resource"`
    
}

type TagResource20190326Headers struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type TagResource20190326Request struct {
    QueryParams TagResource20190326QueryParams 
    Headers TagResource20190326Headers 
    Request []byte `request:"mediaType=text/xml"`
    
}

type TagResource20190326Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

