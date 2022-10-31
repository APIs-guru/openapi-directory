package operations




type PostCreateInstanceEventWindowActionEnum string

const (
    PostCreateInstanceEventWindowActionEnumCreateInstanceEventWindow PostCreateInstanceEventWindowActionEnum = "CreateInstanceEventWindow"
)



type PostCreateInstanceEventWindowVersionEnum string

const (
    PostCreateInstanceEventWindowVersionEnumTwoThousandAndSixteen1115 PostCreateInstanceEventWindowVersionEnum = "2016-11-15"
)


type PostCreateInstanceEventWindowQueryParams struct {
    Action PostCreateInstanceEventWindowActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateInstanceEventWindowVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateInstanceEventWindowHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateInstanceEventWindowRequest struct {
    QueryParams PostCreateInstanceEventWindowQueryParams 
    Headers PostCreateInstanceEventWindowHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateInstanceEventWindowResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

