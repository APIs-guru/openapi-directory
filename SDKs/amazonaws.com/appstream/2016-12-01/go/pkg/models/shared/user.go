package shared

import (
"time")

type User struct {
    Arn *string `json:"Arn,omitempty"`
    AuthenticationType AuthenticationTypeEnum `json:"AuthenticationType"`
    CreatedTime *time.Time `json:"CreatedTime,omitempty"`
    Enabled *bool `json:"Enabled,omitempty"`
    FirstName *string `json:"FirstName,omitempty"`
    LastName *string `json:"LastName,omitempty"`
    Status *string `json:"Status,omitempty"`
    UserName *string `json:"UserName,omitempty"`
    
}

