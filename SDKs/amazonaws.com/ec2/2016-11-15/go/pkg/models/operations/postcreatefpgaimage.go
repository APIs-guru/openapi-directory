package operations




type PostCreateFpgaImageActionEnum string

const (
    PostCreateFpgaImageActionEnumCreateFpgaImage PostCreateFpgaImageActionEnum = "CreateFpgaImage"
)



type PostCreateFpgaImageVersionEnum string

const (
    PostCreateFpgaImageVersionEnumTwoThousandAndSixteen1115 PostCreateFpgaImageVersionEnum = "2016-11-15"
)


type PostCreateFpgaImageQueryParams struct {
    Action PostCreateFpgaImageActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateFpgaImageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateFpgaImageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateFpgaImageRequest struct {
    QueryParams PostCreateFpgaImageQueryParams 
    Headers PostCreateFpgaImageHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateFpgaImageResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

