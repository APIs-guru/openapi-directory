package operations




type TagResource20180618OperationEnum string

const (
    TagResource20180618OperationEnumTag TagResource20180618OperationEnum = "Tag"
)


type TagResource20180618QueryParams struct {
    Operation TagResource20180618OperationEnum `queryParam:"style=form,explode=true,name=Operation"`
    Resource string `queryParam:"style=form,explode=true,name=Resource"`
    
}

type TagResource20180618Headers struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type TagResource20180618Request struct {
    QueryParams TagResource20180618QueryParams 
    Headers TagResource20180618Headers 
    Request []byte `request:"mediaType=text/xml"`
    
}

type TagResource20180618Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

