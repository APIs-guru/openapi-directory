package operations




type UntagResource20190326OperationEnum string

const (
    UntagResource20190326OperationEnumUntag UntagResource20190326OperationEnum = "Untag"
)


type UntagResource20190326QueryParams struct {
    Operation UntagResource20190326OperationEnum `queryParam:"style=form,explode=true,name=Operation"`
    Resource string `queryParam:"style=form,explode=true,name=Resource"`
    
}

type UntagResource20190326Headers struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UntagResource20190326Request struct {
    QueryParams UntagResource20190326QueryParams 
    Headers UntagResource20190326Headers 
    Request []byte `request:"mediaType=text/xml"`
    
}

type UntagResource20190326Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

