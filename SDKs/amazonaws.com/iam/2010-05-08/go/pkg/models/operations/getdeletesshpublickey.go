package operations




type GetDeleteSSHPublicKeyActionEnum string

const (
    GetDeleteSSHPublicKeyActionEnumDeleteSSHPublicKey GetDeleteSSHPublicKeyActionEnum = "DeleteSSHPublicKey"
)



type GetDeleteSSHPublicKeyVersionEnum string

const (
    GetDeleteSSHPublicKeyVersionEnumTwoThousandAndTen0508 GetDeleteSSHPublicKeyVersionEnum = "2010-05-08"
)


type GetDeleteSSHPublicKeyQueryParams struct {
    Action GetDeleteSSHPublicKeyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    SSHPublicKeyID string `queryParam:"style=form,explode=true,name=SSHPublicKeyId"`
    UserName string `queryParam:"style=form,explode=true,name=UserName"`
    Version GetDeleteSSHPublicKeyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteSSHPublicKeyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteSSHPublicKeyRequest struct {
    QueryParams GetDeleteSSHPublicKeyQueryParams 
    Headers GetDeleteSSHPublicKeyHeaders 
    
}

type GetDeleteSSHPublicKeyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

