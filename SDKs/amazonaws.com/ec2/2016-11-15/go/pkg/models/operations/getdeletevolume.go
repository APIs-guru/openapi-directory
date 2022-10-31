package operations




type GetDeleteVolumeActionEnum string

const (
    GetDeleteVolumeActionEnumDeleteVolume GetDeleteVolumeActionEnum = "DeleteVolume"
)



type GetDeleteVolumeVersionEnum string

const (
    GetDeleteVolumeVersionEnumTwoThousandAndSixteen1115 GetDeleteVolumeVersionEnum = "2016-11-15"
)


type GetDeleteVolumeQueryParams struct {
    Action GetDeleteVolumeActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    Version GetDeleteVolumeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    VolumeID string `queryParam:"style=form,explode=true,name=VolumeId"`
    
}

type GetDeleteVolumeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteVolumeRequest struct {
    QueryParams GetDeleteVolumeQueryParams 
    Headers GetDeleteVolumeHeaders 
    
}

type GetDeleteVolumeResponse struct {
    ContentType string 
    StatusCode int64 
    
}

