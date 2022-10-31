package shared

import (
"time")

type InstanceInfo struct {
    DeregisterTime *time.Time `json:"deregisterTime,omitempty"`
    IamSessionArn *string `json:"iamSessionArn,omitempty"`
    IamUserArn *string `json:"iamUserArn,omitempty"`
    InstanceArn *string `json:"instanceArn,omitempty"`
    InstanceName *string `json:"instanceName,omitempty"`
    RegisterTime *time.Time `json:"registerTime,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    
}

