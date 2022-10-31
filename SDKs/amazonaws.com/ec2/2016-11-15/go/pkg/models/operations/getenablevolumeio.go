package operations




type GetEnableVolumeIoActionEnum string

const (
    GetEnableVolumeIoActionEnumEnableVolumeIo GetEnableVolumeIoActionEnum = "EnableVolumeIO"
)



type GetEnableVolumeIoVersionEnum string

const (
    GetEnableVolumeIoVersionEnumTwoThousandAndSixteen1115 GetEnableVolumeIoVersionEnum = "2016-11-15"
)


type GetEnableVolumeIoQueryParams struct {
    Action GetEnableVolumeIoActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    Version GetEnableVolumeIoVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    VolumeID string `queryParam:"style=form,explode=true,name=VolumeId"`
    
}

type GetEnableVolumeIoHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetEnableVolumeIoRequest struct {
    QueryParams GetEnableVolumeIoQueryParams 
    Headers GetEnableVolumeIoHeaders 
    
}

type GetEnableVolumeIoResponse struct {
    ContentType string 
    StatusCode int64 
    
}

