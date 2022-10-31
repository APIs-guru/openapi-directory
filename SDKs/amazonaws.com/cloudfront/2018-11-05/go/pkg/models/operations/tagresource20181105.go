package operations




type TagResource20181105OperationEnum string

const (
    TagResource20181105OperationEnumTag TagResource20181105OperationEnum = "Tag"
)


type TagResource20181105QueryParams struct {
    Operation TagResource20181105OperationEnum `queryParam:"style=form,explode=true,name=Operation"`
    Resource string `queryParam:"style=form,explode=true,name=Resource"`
    
}

type TagResource20181105Headers struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type TagResource20181105Request struct {
    QueryParams TagResource20181105QueryParams 
    Headers TagResource20181105Headers 
    Request []byte `request:"mediaType=text/xml"`
    
}

type TagResource20181105Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

