package shared

import (
"time")

type PreparedStatement struct {
    Description *string `json:"Description,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    QueryStatement *string `json:"QueryStatement,omitempty"`
    StatementName *string `json:"StatementName,omitempty"`
    WorkGroupName *string `json:"WorkGroupName,omitempty"`
    
}

