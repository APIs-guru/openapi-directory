package operations




type GetListVirtualMfaDevicesActionEnum string

const (
    GetListVirtualMfaDevicesActionEnumListVirtualMfaDevices GetListVirtualMfaDevicesActionEnum = "ListVirtualMFADevices"
)



type GetListVirtualMfaDevicesAssignmentStatusEnum string

const (
    GetListVirtualMfaDevicesAssignmentStatusEnumAssigned GetListVirtualMfaDevicesAssignmentStatusEnum = "Assigned"
GetListVirtualMfaDevicesAssignmentStatusEnumUnassigned GetListVirtualMfaDevicesAssignmentStatusEnum = "Unassigned"
GetListVirtualMfaDevicesAssignmentStatusEnumAny GetListVirtualMfaDevicesAssignmentStatusEnum = "Any"
)



type GetListVirtualMfaDevicesVersionEnum string

const (
    GetListVirtualMfaDevicesVersionEnumTwoThousandAndTen0508 GetListVirtualMfaDevicesVersionEnum = "2010-05-08"
)


type GetListVirtualMfaDevicesQueryParams struct {
    Action GetListVirtualMfaDevicesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AssignmentStatus *GetListVirtualMfaDevicesAssignmentStatusEnum `queryParam:"style=form,explode=true,name=AssignmentStatus"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *int64 `queryParam:"style=form,explode=true,name=MaxItems"`
    Version GetListVirtualMfaDevicesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetListVirtualMfaDevicesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetListVirtualMfaDevicesRequest struct {
    QueryParams GetListVirtualMfaDevicesQueryParams 
    Headers GetListVirtualMfaDevicesHeaders 
    
}

type GetListVirtualMfaDevicesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

