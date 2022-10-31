package operations




type PostDeleteInstanceProfileActionEnum string

const (
    PostDeleteInstanceProfileActionEnumDeleteInstanceProfile PostDeleteInstanceProfileActionEnum = "DeleteInstanceProfile"
)



type PostDeleteInstanceProfileVersionEnum string

const (
    PostDeleteInstanceProfileVersionEnumTwoThousandAndTen0508 PostDeleteInstanceProfileVersionEnum = "2010-05-08"
)


type PostDeleteInstanceProfileQueryParams struct {
    Action PostDeleteInstanceProfileActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteInstanceProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteInstanceProfileHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteInstanceProfileRequest struct {
    QueryParams PostDeleteInstanceProfileQueryParams 
    Headers PostDeleteInstanceProfileHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteInstanceProfileResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

