package operations




type GetUpdateSSHPublicKeyActionEnum string

const (
    GetUpdateSSHPublicKeyActionEnumUpdateSSHPublicKey GetUpdateSSHPublicKeyActionEnum = "UpdateSSHPublicKey"
)



type GetUpdateSSHPublicKeyStatusEnum string

const (
    GetUpdateSSHPublicKeyStatusEnumActive GetUpdateSSHPublicKeyStatusEnum = "Active"
GetUpdateSSHPublicKeyStatusEnumInactive GetUpdateSSHPublicKeyStatusEnum = "Inactive"
)



type GetUpdateSSHPublicKeyVersionEnum string

const (
    GetUpdateSSHPublicKeyVersionEnumTwoThousandAndTen0508 GetUpdateSSHPublicKeyVersionEnum = "2010-05-08"
)


type GetUpdateSSHPublicKeyQueryParams struct {
    Action GetUpdateSSHPublicKeyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    SSHPublicKeyID string `queryParam:"style=form,explode=true,name=SSHPublicKeyId"`
    Status GetUpdateSSHPublicKeyStatusEnum `queryParam:"style=form,explode=true,name=Status"`
    UserName string `queryParam:"style=form,explode=true,name=UserName"`
    Version GetUpdateSSHPublicKeyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetUpdateSSHPublicKeyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetUpdateSSHPublicKeyRequest struct {
    QueryParams GetUpdateSSHPublicKeyQueryParams 
    Headers GetUpdateSSHPublicKeyHeaders 
    
}

type GetUpdateSSHPublicKeyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

