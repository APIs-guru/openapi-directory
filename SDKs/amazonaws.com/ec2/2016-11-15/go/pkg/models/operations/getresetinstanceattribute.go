package operations




type GetResetInstanceAttributeActionEnum string

const (
    GetResetInstanceAttributeActionEnumResetInstanceAttribute GetResetInstanceAttributeActionEnum = "ResetInstanceAttribute"
)



type GetResetInstanceAttributeAttributeEnum string

const (
    GetResetInstanceAttributeAttributeEnumInstanceType GetResetInstanceAttributeAttributeEnum = "instanceType"
GetResetInstanceAttributeAttributeEnumKernel GetResetInstanceAttributeAttributeEnum = "kernel"
GetResetInstanceAttributeAttributeEnumRamdisk GetResetInstanceAttributeAttributeEnum = "ramdisk"
GetResetInstanceAttributeAttributeEnumUserData GetResetInstanceAttributeAttributeEnum = "userData"
GetResetInstanceAttributeAttributeEnumDisableAPITermination GetResetInstanceAttributeAttributeEnum = "disableApiTermination"
GetResetInstanceAttributeAttributeEnumInstanceInitiatedShutdownBehavior GetResetInstanceAttributeAttributeEnum = "instanceInitiatedShutdownBehavior"
GetResetInstanceAttributeAttributeEnumRootDeviceName GetResetInstanceAttributeAttributeEnum = "rootDeviceName"
GetResetInstanceAttributeAttributeEnumBlockDeviceMapping GetResetInstanceAttributeAttributeEnum = "blockDeviceMapping"
GetResetInstanceAttributeAttributeEnumProductCodes GetResetInstanceAttributeAttributeEnum = "productCodes"
GetResetInstanceAttributeAttributeEnumSourceDestCheck GetResetInstanceAttributeAttributeEnum = "sourceDestCheck"
GetResetInstanceAttributeAttributeEnumGroupSet GetResetInstanceAttributeAttributeEnum = "groupSet"
GetResetInstanceAttributeAttributeEnumEbsOptimized GetResetInstanceAttributeAttributeEnum = "ebsOptimized"
GetResetInstanceAttributeAttributeEnumSriovNetSupport GetResetInstanceAttributeAttributeEnum = "sriovNetSupport"
GetResetInstanceAttributeAttributeEnumEnaSupport GetResetInstanceAttributeAttributeEnum = "enaSupport"
GetResetInstanceAttributeAttributeEnumEnclaveOptions GetResetInstanceAttributeAttributeEnum = "enclaveOptions"
)



type GetResetInstanceAttributeVersionEnum string

const (
    GetResetInstanceAttributeVersionEnumTwoThousandAndSixteen1115 GetResetInstanceAttributeVersionEnum = "2016-11-15"
)


type GetResetInstanceAttributeQueryParams struct {
    Action GetResetInstanceAttributeActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Attribute GetResetInstanceAttributeAttributeEnum `queryParam:"style=form,explode=true,name=Attribute"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    InstanceID string `queryParam:"style=form,explode=true,name=InstanceId"`
    Version GetResetInstanceAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetResetInstanceAttributeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetResetInstanceAttributeRequest struct {
    QueryParams GetResetInstanceAttributeQueryParams 
    Headers GetResetInstanceAttributeHeaders 
    
}

type GetResetInstanceAttributeResponse struct {
    ContentType string 
    StatusCode int64 
    
}

