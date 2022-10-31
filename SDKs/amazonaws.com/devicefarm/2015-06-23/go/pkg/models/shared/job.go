package shared

import (
"time")

type Job struct {
    Arn *string `json:"arn,omitempty"`
    Counters *Counters `json:"counters,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    Device *Device `json:"device,omitempty"`
    DeviceMinutes *DeviceMinutes `json:"deviceMinutes,omitempty"`
    InstanceArn *string `json:"instanceArn,omitempty"`
    Message *string `json:"message,omitempty"`
    Name *string `json:"name,omitempty"`
    Result *ExecutionResultEnum `json:"result,omitempty"`
    Started *time.Time `json:"started,omitempty"`
    Status *ExecutionStatusEnum `json:"status,omitempty"`
    Stopped *time.Time `json:"stopped,omitempty"`
    Type *TestTypeEnum `json:"type,omitempty"`
    VideoCapture *bool `json:"videoCapture,omitempty"`
    VideoEndpoint *string `json:"videoEndpoint,omitempty"`
    
}

