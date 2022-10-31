package shared



type UpdateFleetRequest struct {
    AttributesToDelete []FleetAttributeEnum `json:"AttributesToDelete,omitempty"`
    ComputeCapacity *ComputeCapacity `json:"ComputeCapacity,omitempty"`
    DeleteVpcConfig *bool `json:"DeleteVpcConfig,omitempty"`
    Description *string `json:"Description,omitempty"`
    DisconnectTimeoutInSeconds *int64 `json:"DisconnectTimeoutInSeconds,omitempty"`
    DisplayName *string `json:"DisplayName,omitempty"`
    DomainJoinInfo *DomainJoinInfo `json:"DomainJoinInfo,omitempty"`
    EnableDefaultInternetAccess *bool `json:"EnableDefaultInternetAccess,omitempty"`
    IamRoleArn *string `json:"IamRoleArn,omitempty"`
    IdleDisconnectTimeoutInSeconds *int64 `json:"IdleDisconnectTimeoutInSeconds,omitempty"`
    ImageArn *string `json:"ImageArn,omitempty"`
    ImageName *string `json:"ImageName,omitempty"`
    InstanceType *string `json:"InstanceType,omitempty"`
    MaxUserDurationInSeconds *int64 `json:"MaxUserDurationInSeconds,omitempty"`
    Name *string `json:"Name,omitempty"`
    StreamView *StreamViewEnum `json:"StreamView,omitempty"`
    VpcConfig *VpcConfig `json:"VpcConfig,omitempty"`
    
}

