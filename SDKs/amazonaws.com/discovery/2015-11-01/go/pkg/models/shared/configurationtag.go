package shared

import (
	"time"
)

type ConfigurationTag struct {
	ConfigurationID   *string                    `json:"configurationId"`
	ConfigurationType *ConfigurationItemTypeEnum `json:"configurationType"`
	Key               *string                    `json:"key"`
	TimeOfCreation    *time.Time                 `json:"timeOfCreation"`
	Value             *string                    `json:"value"`
}
