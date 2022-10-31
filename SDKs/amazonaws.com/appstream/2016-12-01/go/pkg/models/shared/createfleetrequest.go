package shared



type CreateFleetRequest struct {
    ComputeCapacity ComputeCapacity `json:"ComputeCapacity"`
    Description *string `json:"Description,omitempty"`
    DisconnectTimeoutInSeconds *int64 `json:"DisconnectTimeoutInSeconds,omitempty"`
    DisplayName *string `json:"DisplayName,omitempty"`
    DomainJoinInfo *DomainJoinInfo `json:"DomainJoinInfo,omitempty"`
    EnableDefaultInternetAccess *bool `json:"EnableDefaultInternetAccess,omitempty"`
    FleetType *FleetTypeEnum `json:"FleetType,omitempty"`
    IamRoleArn *string `json:"IamRoleArn,omitempty"`
    IdleDisconnectTimeoutInSeconds *int64 `json:"IdleDisconnectTimeoutInSeconds,omitempty"`
    ImageArn *string `json:"ImageArn,omitempty"`
    ImageName *string `json:"ImageName,omitempty"`
    InstanceType string `json:"InstanceType"`
    MaxUserDurationInSeconds *int64 `json:"MaxUserDurationInSeconds,omitempty"`
    Name string `json:"Name"`
    StreamView *StreamViewEnum `json:"StreamView,omitempty"`
    Tags map[string]string `json:"Tags,omitempty"`
    VpcConfig *VpcConfig `json:"VpcConfig,omitempty"`
    
}

