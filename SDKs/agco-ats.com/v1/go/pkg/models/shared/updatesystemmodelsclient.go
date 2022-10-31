package shared

import (
"time")

type UpdateSystemModelsClient struct {
    ClientID *string `json:"ClientID,omitempty" form:"name=ClientID"`
    LastCheckin *time.Time `json:"LastCheckin,omitempty" form:"name=LastCheckin"`
    Tag *string `json:"Tag,omitempty" form:"name=Tag"`
    
}

