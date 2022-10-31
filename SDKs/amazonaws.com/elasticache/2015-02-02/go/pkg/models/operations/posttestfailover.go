package operations




type PostTestFailoverActionEnum string

const (
    PostTestFailoverActionEnumTestFailover PostTestFailoverActionEnum = "TestFailover"
)



type PostTestFailoverVersionEnum string

const (
    PostTestFailoverVersionEnumTwoThousandAndFifteen0202 PostTestFailoverVersionEnum = "2015-02-02"
)


type PostTestFailoverQueryParams struct {
    Action PostTestFailoverActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostTestFailoverVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostTestFailoverHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostTestFailoverRequest struct {
    QueryParams PostTestFailoverQueryParams 
    Headers PostTestFailoverHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostTestFailoverResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

