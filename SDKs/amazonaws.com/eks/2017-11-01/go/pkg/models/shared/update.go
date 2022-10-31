package shared

import (
"time")

type Update struct {
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    Errors []ErrorDetail `json:"errors,omitempty"`
    ID *string `json:"id,omitempty"`
    Params []UpdateParam `json:"params,omitempty"`
    Status *UpdateStatusEnum `json:"status,omitempty"`
    Type *UpdateTypeEnum `json:"type,omitempty"`
    
}

