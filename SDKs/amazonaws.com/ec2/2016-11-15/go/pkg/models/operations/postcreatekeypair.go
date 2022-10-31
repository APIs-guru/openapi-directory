package operations




type PostCreateKeyPairActionEnum string

const (
    PostCreateKeyPairActionEnumCreateKeyPair PostCreateKeyPairActionEnum = "CreateKeyPair"
)



type PostCreateKeyPairVersionEnum string

const (
    PostCreateKeyPairVersionEnumTwoThousandAndSixteen1115 PostCreateKeyPairVersionEnum = "2016-11-15"
)


type PostCreateKeyPairQueryParams struct {
    Action PostCreateKeyPairActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateKeyPairVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateKeyPairHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateKeyPairRequest struct {
    QueryParams PostCreateKeyPairQueryParams 
    Headers PostCreateKeyPairHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateKeyPairResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

