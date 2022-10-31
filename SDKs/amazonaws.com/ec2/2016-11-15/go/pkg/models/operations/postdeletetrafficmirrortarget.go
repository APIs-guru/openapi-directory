package operations




type PostDeleteTrafficMirrorTargetActionEnum string

const (
    PostDeleteTrafficMirrorTargetActionEnumDeleteTrafficMirrorTarget PostDeleteTrafficMirrorTargetActionEnum = "DeleteTrafficMirrorTarget"
)



type PostDeleteTrafficMirrorTargetVersionEnum string

const (
    PostDeleteTrafficMirrorTargetVersionEnumTwoThousandAndSixteen1115 PostDeleteTrafficMirrorTargetVersionEnum = "2016-11-15"
)


type PostDeleteTrafficMirrorTargetQueryParams struct {
    Action PostDeleteTrafficMirrorTargetActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteTrafficMirrorTargetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteTrafficMirrorTargetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteTrafficMirrorTargetRequest struct {
    QueryParams PostDeleteTrafficMirrorTargetQueryParams 
    Headers PostDeleteTrafficMirrorTargetHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteTrafficMirrorTargetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

