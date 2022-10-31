package operations




type GetModifyVolumeActionEnum string

const (
    GetModifyVolumeActionEnumModifyVolume GetModifyVolumeActionEnum = "ModifyVolume"
)



type GetModifyVolumeVersionEnum string

const (
    GetModifyVolumeVersionEnumTwoThousandAndSixteen1115 GetModifyVolumeVersionEnum = "2016-11-15"
)



type GetModifyVolumeVolumeTypeEnum string

const (
    GetModifyVolumeVolumeTypeEnumStandard GetModifyVolumeVolumeTypeEnum = "standard"
GetModifyVolumeVolumeTypeEnumIo1 GetModifyVolumeVolumeTypeEnum = "io1"
GetModifyVolumeVolumeTypeEnumIo2 GetModifyVolumeVolumeTypeEnum = "io2"
GetModifyVolumeVolumeTypeEnumGp2 GetModifyVolumeVolumeTypeEnum = "gp2"
GetModifyVolumeVolumeTypeEnumSc1 GetModifyVolumeVolumeTypeEnum = "sc1"
GetModifyVolumeVolumeTypeEnumSt1 GetModifyVolumeVolumeTypeEnum = "st1"
GetModifyVolumeVolumeTypeEnumGp3 GetModifyVolumeVolumeTypeEnum = "gp3"
)


type GetModifyVolumeQueryParams struct {
    Action GetModifyVolumeActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    Iops *int64 `queryParam:"style=form,explode=true,name=Iops"`
    MultiAttachEnabled *bool `queryParam:"style=form,explode=true,name=MultiAttachEnabled"`
    Size *int64 `queryParam:"style=form,explode=true,name=Size"`
    Throughput *int64 `queryParam:"style=form,explode=true,name=Throughput"`
    Version GetModifyVolumeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    VolumeID string `queryParam:"style=form,explode=true,name=VolumeId"`
    VolumeType *GetModifyVolumeVolumeTypeEnum `queryParam:"style=form,explode=true,name=VolumeType"`
    
}

type GetModifyVolumeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetModifyVolumeRequest struct {
    QueryParams GetModifyVolumeQueryParams 
    Headers GetModifyVolumeHeaders 
    
}

type GetModifyVolumeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

