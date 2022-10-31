package operations




type GetUploadSSHPublicKeyActionEnum string

const (
    GetUploadSSHPublicKeyActionEnumUploadSSHPublicKey GetUploadSSHPublicKeyActionEnum = "UploadSSHPublicKey"
)



type GetUploadSSHPublicKeyVersionEnum string

const (
    GetUploadSSHPublicKeyVersionEnumTwoThousandAndTen0508 GetUploadSSHPublicKeyVersionEnum = "2010-05-08"
)


type GetUploadSSHPublicKeyQueryParams struct {
    Action GetUploadSSHPublicKeyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    SSHPublicKeyBody string `queryParam:"style=form,explode=true,name=SSHPublicKeyBody"`
    UserName string `queryParam:"style=form,explode=true,name=UserName"`
    Version GetUploadSSHPublicKeyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetUploadSSHPublicKeyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetUploadSSHPublicKeyRequest struct {
    QueryParams GetUploadSSHPublicKeyQueryParams 
    Headers GetUploadSSHPublicKeyHeaders 
    
}

type GetUploadSSHPublicKeyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

