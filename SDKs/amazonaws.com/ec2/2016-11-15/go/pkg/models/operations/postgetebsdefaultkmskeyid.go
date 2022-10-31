package operations




type PostGetEbsDefaultKmsKeyIDActionEnum string

const (
    PostGetEbsDefaultKmsKeyIDActionEnumGetEbsDefaultKmsKeyID PostGetEbsDefaultKmsKeyIDActionEnum = "GetEbsDefaultKmsKeyId"
)



type PostGetEbsDefaultKmsKeyIDVersionEnum string

const (
    PostGetEbsDefaultKmsKeyIDVersionEnumTwoThousandAndSixteen1115 PostGetEbsDefaultKmsKeyIDVersionEnum = "2016-11-15"
)


type PostGetEbsDefaultKmsKeyIDQueryParams struct {
    Action PostGetEbsDefaultKmsKeyIDActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostGetEbsDefaultKmsKeyIDVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostGetEbsDefaultKmsKeyIDHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostGetEbsDefaultKmsKeyIDRequest struct {
    QueryParams PostGetEbsDefaultKmsKeyIDQueryParams 
    Headers PostGetEbsDefaultKmsKeyIDHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostGetEbsDefaultKmsKeyIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

