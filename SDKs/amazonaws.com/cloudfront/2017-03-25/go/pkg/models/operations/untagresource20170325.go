package operations




type UntagResource20170325OperationEnum string

const (
    UntagResource20170325OperationEnumUntag UntagResource20170325OperationEnum = "Untag"
)


type UntagResource20170325QueryParams struct {
    Operation UntagResource20170325OperationEnum `queryParam:"style=form,explode=true,name=Operation"`
    Resource string `queryParam:"style=form,explode=true,name=Resource"`
    
}

type UntagResource20170325Headers struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UntagResource20170325Request struct {
    QueryParams UntagResource20170325QueryParams 
    Headers UntagResource20170325Headers 
    Request []byte `request:"mediaType=text/xml"`
    
}

type UntagResource20170325Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

