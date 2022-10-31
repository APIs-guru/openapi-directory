package operations




type PostCreateTrafficMirrorTargetActionEnum string

const (
    PostCreateTrafficMirrorTargetActionEnumCreateTrafficMirrorTarget PostCreateTrafficMirrorTargetActionEnum = "CreateTrafficMirrorTarget"
)



type PostCreateTrafficMirrorTargetVersionEnum string

const (
    PostCreateTrafficMirrorTargetVersionEnumTwoThousandAndSixteen1115 PostCreateTrafficMirrorTargetVersionEnum = "2016-11-15"
)


type PostCreateTrafficMirrorTargetQueryParams struct {
    Action PostCreateTrafficMirrorTargetActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateTrafficMirrorTargetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateTrafficMirrorTargetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateTrafficMirrorTargetRequest struct {
    QueryParams PostCreateTrafficMirrorTargetQueryParams 
    Headers PostCreateTrafficMirrorTargetHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateTrafficMirrorTargetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

