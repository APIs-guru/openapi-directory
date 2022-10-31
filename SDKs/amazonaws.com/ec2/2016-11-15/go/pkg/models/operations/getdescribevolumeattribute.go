package operations




type GetDescribeVolumeAttributeActionEnum string

const (
    GetDescribeVolumeAttributeActionEnumDescribeVolumeAttribute GetDescribeVolumeAttributeActionEnum = "DescribeVolumeAttribute"
)



type GetDescribeVolumeAttributeAttributeEnum string

const (
    GetDescribeVolumeAttributeAttributeEnumAutoEnableIo GetDescribeVolumeAttributeAttributeEnum = "autoEnableIO"
GetDescribeVolumeAttributeAttributeEnumProductCodes GetDescribeVolumeAttributeAttributeEnum = "productCodes"
)



type GetDescribeVolumeAttributeVersionEnum string

const (
    GetDescribeVolumeAttributeVersionEnumTwoThousandAndSixteen1115 GetDescribeVolumeAttributeVersionEnum = "2016-11-15"
)


type GetDescribeVolumeAttributeQueryParams struct {
    Action GetDescribeVolumeAttributeActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Attribute GetDescribeVolumeAttributeAttributeEnum `queryParam:"style=form,explode=true,name=Attribute"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    Version GetDescribeVolumeAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    VolumeID string `queryParam:"style=form,explode=true,name=VolumeId"`
    
}

type GetDescribeVolumeAttributeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeVolumeAttributeRequest struct {
    QueryParams GetDescribeVolumeAttributeQueryParams 
    Headers GetDescribeVolumeAttributeHeaders 
    
}

type GetDescribeVolumeAttributeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

