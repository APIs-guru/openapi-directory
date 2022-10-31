package operations




type GetModifyNetworkInterfaceAttributeActionEnum string

const (
    GetModifyNetworkInterfaceAttributeActionEnumModifyNetworkInterfaceAttribute GetModifyNetworkInterfaceAttributeActionEnum = "ModifyNetworkInterfaceAttribute"
)


type GetModifyNetworkInterfaceAttributeAttachment struct {
    AttachmentID *string `queryParam:"name=AttachmentId"`
    DeleteOnTermination *bool `queryParam:"name=DeleteOnTermination"`
    
}

type GetModifyNetworkInterfaceAttributeDescription struct {
    Value *string `queryParam:"name=Value"`
    
}

type GetModifyNetworkInterfaceAttributeSourceDestCheck struct {
    Value *bool `queryParam:"name=Value"`
    
}


type GetModifyNetworkInterfaceAttributeVersionEnum string

const (
    GetModifyNetworkInterfaceAttributeVersionEnumTwoThousandAndSixteen1115 GetModifyNetworkInterfaceAttributeVersionEnum = "2016-11-15"
)


type GetModifyNetworkInterfaceAttributeQueryParams struct {
    Action GetModifyNetworkInterfaceAttributeActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Attachment *GetModifyNetworkInterfaceAttributeAttachment `queryParam:"style=form,explode=true,name=Attachment"`
    Description *GetModifyNetworkInterfaceAttributeDescription `queryParam:"style=form,explode=true,name=Description"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    NetworkInterfaceID string `queryParam:"style=form,explode=true,name=NetworkInterfaceId"`
    SecurityGroupID []string `queryParam:"style=form,explode=true,name=SecurityGroupId"`
    SourceDestCheck *GetModifyNetworkInterfaceAttributeSourceDestCheck `queryParam:"style=form,explode=true,name=SourceDestCheck"`
    Version GetModifyNetworkInterfaceAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetModifyNetworkInterfaceAttributeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetModifyNetworkInterfaceAttributeRequest struct {
    QueryParams GetModifyNetworkInterfaceAttributeQueryParams 
    Headers GetModifyNetworkInterfaceAttributeHeaders 
    
}

type GetModifyNetworkInterfaceAttributeResponse struct {
    ContentType string 
    StatusCode int64 
    
}

