package operations




type PostModifyVolumeActionEnum string

const (
    PostModifyVolumeActionEnumModifyVolume PostModifyVolumeActionEnum = "ModifyVolume"
)



type PostModifyVolumeVersionEnum string

const (
    PostModifyVolumeVersionEnumTwoThousandAndSixteen1115 PostModifyVolumeVersionEnum = "2016-11-15"
)


type PostModifyVolumeQueryParams struct {
    Action PostModifyVolumeActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostModifyVolumeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostModifyVolumeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostModifyVolumeRequest struct {
    QueryParams PostModifyVolumeQueryParams 
    Headers PostModifyVolumeHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostModifyVolumeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

