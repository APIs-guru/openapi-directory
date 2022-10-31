package operations




type PostCreateVirtualMfaDeviceActionEnum string

const (
    PostCreateVirtualMfaDeviceActionEnumCreateVirtualMfaDevice PostCreateVirtualMfaDeviceActionEnum = "CreateVirtualMFADevice"
)



type PostCreateVirtualMfaDeviceVersionEnum string

const (
    PostCreateVirtualMfaDeviceVersionEnumTwoThousandAndTen0508 PostCreateVirtualMfaDeviceVersionEnum = "2010-05-08"
)


type PostCreateVirtualMfaDeviceQueryParams struct {
    Action PostCreateVirtualMfaDeviceActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateVirtualMfaDeviceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateVirtualMfaDeviceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateVirtualMfaDeviceRequest struct {
    QueryParams PostCreateVirtualMfaDeviceQueryParams 
    Headers PostCreateVirtualMfaDeviceHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateVirtualMfaDeviceResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

