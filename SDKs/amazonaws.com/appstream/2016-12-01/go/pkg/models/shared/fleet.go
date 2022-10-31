package shared

import (
"time")

type Fleet struct {
    Arn string `json:"Arn"`
    ComputeCapacityStatus ComputeCapacityStatus `json:"ComputeCapacityStatus"`
    CreatedTime *time.Time `json:"CreatedTime,omitempty"`
    Description *string `json:"Description,omitempty"`
    DisconnectTimeoutInSeconds *int64 `json:"DisconnectTimeoutInSeconds,omitempty"`
    DisplayName *string `json:"DisplayName,omitempty"`
    DomainJoinInfo *DomainJoinInfo `json:"DomainJoinInfo,omitempty"`
    EnableDefaultInternetAccess *bool `json:"EnableDefaultInternetAccess,omitempty"`
    FleetErrors []FleetError `json:"FleetErrors,omitempty"`
    FleetType *FleetTypeEnum `json:"FleetType,omitempty"`
    IamRoleArn *string `json:"IamRoleArn,omitempty"`
    IdleDisconnectTimeoutInSeconds *int64 `json:"IdleDisconnectTimeoutInSeconds,omitempty"`
    ImageArn *string `json:"ImageArn,omitempty"`
    ImageName *string `json:"ImageName,omitempty"`
    InstanceType string `json:"InstanceType"`
    MaxUserDurationInSeconds *int64 `json:"MaxUserDurationInSeconds,omitempty"`
    Name string `json:"Name"`
    State FleetStateEnum `json:"State"`
    StreamView *StreamViewEnum `json:"StreamView,omitempty"`
    VpcConfig *VpcConfig `json:"VpcConfig,omitempty"`
    
}

