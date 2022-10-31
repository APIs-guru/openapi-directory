package operations




type GetGenerateCredentialReportActionEnum string

const (
    GetGenerateCredentialReportActionEnumGenerateCredentialReport GetGenerateCredentialReportActionEnum = "GenerateCredentialReport"
)



type GetGenerateCredentialReportVersionEnum string

const (
    GetGenerateCredentialReportVersionEnumTwoThousandAndTen0508 GetGenerateCredentialReportVersionEnum = "2010-05-08"
)


type GetGenerateCredentialReportQueryParams struct {
    Action GetGenerateCredentialReportActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version GetGenerateCredentialReportVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetGenerateCredentialReportHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGenerateCredentialReportRequest struct {
    QueryParams GetGenerateCredentialReportQueryParams 
    Headers GetGenerateCredentialReportHeaders 
    
}

type GetGenerateCredentialReportResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

