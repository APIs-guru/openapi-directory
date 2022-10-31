package operations




type PostGetCredentialReportActionEnum string

const (
    PostGetCredentialReportActionEnumGetCredentialReport PostGetCredentialReportActionEnum = "GetCredentialReport"
)



type PostGetCredentialReportVersionEnum string

const (
    PostGetCredentialReportVersionEnumTwoThousandAndTen0508 PostGetCredentialReportVersionEnum = "2010-05-08"
)


type PostGetCredentialReportQueryParams struct {
    Action PostGetCredentialReportActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostGetCredentialReportVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostGetCredentialReportHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostGetCredentialReportRequest struct {
    QueryParams PostGetCredentialReportQueryParams 
    Headers PostGetCredentialReportHeaders 
    
}

type PostGetCredentialReportResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

