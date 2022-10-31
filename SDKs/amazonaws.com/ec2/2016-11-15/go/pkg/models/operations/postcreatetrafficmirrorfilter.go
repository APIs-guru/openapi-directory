package operations




type PostCreateTrafficMirrorFilterActionEnum string

const (
    PostCreateTrafficMirrorFilterActionEnumCreateTrafficMirrorFilter PostCreateTrafficMirrorFilterActionEnum = "CreateTrafficMirrorFilter"
)



type PostCreateTrafficMirrorFilterVersionEnum string

const (
    PostCreateTrafficMirrorFilterVersionEnumTwoThousandAndSixteen1115 PostCreateTrafficMirrorFilterVersionEnum = "2016-11-15"
)


type PostCreateTrafficMirrorFilterQueryParams struct {
    Action PostCreateTrafficMirrorFilterActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateTrafficMirrorFilterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateTrafficMirrorFilterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateTrafficMirrorFilterRequest struct {
    QueryParams PostCreateTrafficMirrorFilterQueryParams 
    Headers PostCreateTrafficMirrorFilterHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateTrafficMirrorFilterResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

