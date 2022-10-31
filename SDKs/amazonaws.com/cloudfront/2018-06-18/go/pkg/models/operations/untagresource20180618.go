package operations




type UntagResource20180618OperationEnum string

const (
    UntagResource20180618OperationEnumUntag UntagResource20180618OperationEnum = "Untag"
)


type UntagResource20180618QueryParams struct {
    Operation UntagResource20180618OperationEnum `queryParam:"style=form,explode=true,name=Operation"`
    Resource string `queryParam:"style=form,explode=true,name=Resource"`
    
}

type UntagResource20180618Headers struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UntagResource20180618Request struct {
    QueryParams UntagResource20180618QueryParams 
    Headers UntagResource20180618Headers 
    Request []byte `request:"mediaType=text/xml"`
    
}

type UntagResource20180618Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

