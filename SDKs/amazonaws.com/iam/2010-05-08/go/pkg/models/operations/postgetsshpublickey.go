package operations




type PostGetSSHPublicKeyActionEnum string

const (
    PostGetSSHPublicKeyActionEnumGetSSHPublicKey PostGetSSHPublicKeyActionEnum = "GetSSHPublicKey"
)



type PostGetSSHPublicKeyVersionEnum string

const (
    PostGetSSHPublicKeyVersionEnumTwoThousandAndTen0508 PostGetSSHPublicKeyVersionEnum = "2010-05-08"
)


type PostGetSSHPublicKeyQueryParams struct {
    Action PostGetSSHPublicKeyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostGetSSHPublicKeyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostGetSSHPublicKeyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostGetSSHPublicKeyRequest struct {
    QueryParams PostGetSSHPublicKeyQueryParams 
    Headers PostGetSSHPublicKeyHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostGetSSHPublicKeyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

