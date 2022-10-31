package operations




type TagResource20171030OperationEnum string

const (
    TagResource20171030OperationEnumTag TagResource20171030OperationEnum = "Tag"
)


type TagResource20171030QueryParams struct {
    Operation TagResource20171030OperationEnum `queryParam:"style=form,explode=true,name=Operation"`
    Resource string `queryParam:"style=form,explode=true,name=Resource"`
    
}

type TagResource20171030Headers struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type TagResource20171030Request struct {
    QueryParams TagResource20171030QueryParams 
    Headers TagResource20171030Headers 
    Request []byte `request:"mediaType=text/xml"`
    
}

type TagResource20171030Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

