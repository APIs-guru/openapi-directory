package operations




type PostDescribeListenerCertificatesActionEnum string

const (
    PostDescribeListenerCertificatesActionEnumDescribeListenerCertificates PostDescribeListenerCertificatesActionEnum = "DescribeListenerCertificates"
)



type PostDescribeListenerCertificatesVersionEnum string

const (
    PostDescribeListenerCertificatesVersionEnumTwoThousandAndFifteen1201 PostDescribeListenerCertificatesVersionEnum = "2015-12-01"
)


type PostDescribeListenerCertificatesQueryParams struct {
    Action PostDescribeListenerCertificatesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeListenerCertificatesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeListenerCertificatesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeListenerCertificatesRequest struct {
    QueryParams PostDescribeListenerCertificatesQueryParams 
    Headers PostDescribeListenerCertificatesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeListenerCertificatesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

