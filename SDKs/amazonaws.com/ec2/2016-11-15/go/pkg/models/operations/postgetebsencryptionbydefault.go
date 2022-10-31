package operations




type PostGetEbsEncryptionByDefaultActionEnum string

const (
    PostGetEbsEncryptionByDefaultActionEnumGetEbsEncryptionByDefault PostGetEbsEncryptionByDefaultActionEnum = "GetEbsEncryptionByDefault"
)



type PostGetEbsEncryptionByDefaultVersionEnum string

const (
    PostGetEbsEncryptionByDefaultVersionEnumTwoThousandAndSixteen1115 PostGetEbsEncryptionByDefaultVersionEnum = "2016-11-15"
)


type PostGetEbsEncryptionByDefaultQueryParams struct {
    Action PostGetEbsEncryptionByDefaultActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostGetEbsEncryptionByDefaultVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostGetEbsEncryptionByDefaultHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostGetEbsEncryptionByDefaultRequest struct {
    QueryParams PostGetEbsEncryptionByDefaultQueryParams 
    Headers PostGetEbsEncryptionByDefaultHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostGetEbsEncryptionByDefaultResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

