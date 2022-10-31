package operations




type PostDeleteVolumeActionEnum string

const (
    PostDeleteVolumeActionEnumDeleteVolume PostDeleteVolumeActionEnum = "DeleteVolume"
)



type PostDeleteVolumeVersionEnum string

const (
    PostDeleteVolumeVersionEnumTwoThousandAndSixteen1115 PostDeleteVolumeVersionEnum = "2016-11-15"
)


type PostDeleteVolumeQueryParams struct {
    Action PostDeleteVolumeActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteVolumeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteVolumeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteVolumeRequest struct {
    QueryParams PostDeleteVolumeQueryParams 
    Headers PostDeleteVolumeHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteVolumeResponse struct {
    ContentType string 
    StatusCode int64 
    
}

