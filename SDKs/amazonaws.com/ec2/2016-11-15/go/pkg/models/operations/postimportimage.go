package operations




type PostImportImageActionEnum string

const (
    PostImportImageActionEnumImportImage PostImportImageActionEnum = "ImportImage"
)



type PostImportImageVersionEnum string

const (
    PostImportImageVersionEnumTwoThousandAndSixteen1115 PostImportImageVersionEnum = "2016-11-15"
)


type PostImportImageQueryParams struct {
    Action PostImportImageActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostImportImageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostImportImageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostImportImageRequest struct {
    QueryParams PostImportImageQueryParams 
    Headers PostImportImageHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostImportImageResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

