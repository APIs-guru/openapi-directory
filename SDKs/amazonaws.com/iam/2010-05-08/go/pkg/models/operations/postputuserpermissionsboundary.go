package operations




type PostPutUserPermissionsBoundaryActionEnum string

const (
    PostPutUserPermissionsBoundaryActionEnumPutUserPermissionsBoundary PostPutUserPermissionsBoundaryActionEnum = "PutUserPermissionsBoundary"
)



type PostPutUserPermissionsBoundaryVersionEnum string

const (
    PostPutUserPermissionsBoundaryVersionEnumTwoThousandAndTen0508 PostPutUserPermissionsBoundaryVersionEnum = "2010-05-08"
)


type PostPutUserPermissionsBoundaryQueryParams struct {
    Action PostPutUserPermissionsBoundaryActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostPutUserPermissionsBoundaryVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostPutUserPermissionsBoundaryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostPutUserPermissionsBoundaryRequest struct {
    QueryParams PostPutUserPermissionsBoundaryQueryParams 
    Headers PostPutUserPermissionsBoundaryHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostPutUserPermissionsBoundaryResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

