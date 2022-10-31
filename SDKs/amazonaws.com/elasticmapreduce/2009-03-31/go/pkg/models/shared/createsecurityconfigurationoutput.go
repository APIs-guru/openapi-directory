package shared

import (
"time")

type CreateSecurityConfigurationOutput struct {
    CreationDateTime time.Time `json:"CreationDateTime"`
    Name string `json:"Name"`
    
}

