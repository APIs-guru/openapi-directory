package operations




type PostAttachVolumeActionEnum string

const (
    PostAttachVolumeActionEnumAttachVolume PostAttachVolumeActionEnum = "AttachVolume"
)



type PostAttachVolumeVersionEnum string

const (
    PostAttachVolumeVersionEnumTwoThousandAndSixteen1115 PostAttachVolumeVersionEnum = "2016-11-15"
)


type PostAttachVolumeQueryParams struct {
    Action PostAttachVolumeActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostAttachVolumeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostAttachVolumeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostAttachVolumeRequest struct {
    QueryParams PostAttachVolumeQueryParams 
    Headers PostAttachVolumeHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostAttachVolumeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

