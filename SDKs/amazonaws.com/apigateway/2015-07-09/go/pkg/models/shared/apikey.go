package shared

import (
"time")

type APIKey struct {
    CreatedDate *time.Time `json:"createdDate,omitempty"`
    CustomerID *string `json:"customerId,omitempty"`
    Description *string `json:"description,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    ID *string `json:"id,omitempty"`
    LastUpdatedDate *time.Time `json:"lastUpdatedDate,omitempty"`
    Name *string `json:"name,omitempty"`
    StageKeys []string `json:"stageKeys,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

