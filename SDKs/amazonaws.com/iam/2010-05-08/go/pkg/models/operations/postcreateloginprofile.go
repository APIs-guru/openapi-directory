package operations




type PostCreateLoginProfileActionEnum string

const (
    PostCreateLoginProfileActionEnumCreateLoginProfile PostCreateLoginProfileActionEnum = "CreateLoginProfile"
)



type PostCreateLoginProfileVersionEnum string

const (
    PostCreateLoginProfileVersionEnumTwoThousandAndTen0508 PostCreateLoginProfileVersionEnum = "2010-05-08"
)


type PostCreateLoginProfileQueryParams struct {
    Action PostCreateLoginProfileActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateLoginProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateLoginProfileHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateLoginProfileRequest struct {
    QueryParams PostCreateLoginProfileQueryParams 
    Headers PostCreateLoginProfileHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateLoginProfileResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

