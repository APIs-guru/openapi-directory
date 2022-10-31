package shared

import (
"time")

type PortalSummary struct {
    CreationDate *time.Time `json:"creationDate,omitempty"`
    Description *string `json:"description,omitempty"`
    ID string `json:"id"`
    LastUpdateDate *time.Time `json:"lastUpdateDate,omitempty"`
    Name string `json:"name"`
    RoleArn *string `json:"roleArn,omitempty"`
    StartURL string `json:"startUrl"`
    Status PortalStatus `json:"status"`
    
}

