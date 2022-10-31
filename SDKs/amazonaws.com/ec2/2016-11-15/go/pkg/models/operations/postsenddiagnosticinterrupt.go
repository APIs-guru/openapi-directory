package operations




type PostSendDiagnosticInterruptActionEnum string

const (
    PostSendDiagnosticInterruptActionEnumSendDiagnosticInterrupt PostSendDiagnosticInterruptActionEnum = "SendDiagnosticInterrupt"
)



type PostSendDiagnosticInterruptVersionEnum string

const (
    PostSendDiagnosticInterruptVersionEnumTwoThousandAndSixteen1115 PostSendDiagnosticInterruptVersionEnum = "2016-11-15"
)


type PostSendDiagnosticInterruptQueryParams struct {
    Action PostSendDiagnosticInterruptActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostSendDiagnosticInterruptVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostSendDiagnosticInterruptHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostSendDiagnosticInterruptRequest struct {
    QueryParams PostSendDiagnosticInterruptQueryParams 
    Headers PostSendDiagnosticInterruptHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostSendDiagnosticInterruptResponse struct {
    ContentType string 
    StatusCode int64 
    
}

