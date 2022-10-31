package shared

import (
"time")

type ConfigurationTag struct {
    ConfigurationID *string `json:"configurationId,omitempty"`
    ConfigurationType *ConfigurationItemTypeEnum `json:"configurationType,omitempty"`
    Key *string `json:"key,omitempty"`
    TimeOfCreation *time.Time `json:"timeOfCreation,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

