package operations




type PostCopyFpgaImageActionEnum string

const (
    PostCopyFpgaImageActionEnumCopyFpgaImage PostCopyFpgaImageActionEnum = "CopyFpgaImage"
)



type PostCopyFpgaImageVersionEnum string

const (
    PostCopyFpgaImageVersionEnumTwoThousandAndSixteen1115 PostCopyFpgaImageVersionEnum = "2016-11-15"
)


type PostCopyFpgaImageQueryParams struct {
    Action PostCopyFpgaImageActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCopyFpgaImageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCopyFpgaImageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCopyFpgaImageRequest struct {
    QueryParams PostCopyFpgaImageQueryParams 
    Headers PostCopyFpgaImageHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCopyFpgaImageResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

