package shared

import (
"time")

type DeviceType struct {
    DeviceAttributes []AttributeType `json:"DeviceAttributes,omitempty"`
    DeviceCreateDate *time.Time `json:"DeviceCreateDate,omitempty"`
    DeviceKey *string `json:"DeviceKey,omitempty"`
    DeviceLastAuthenticatedDate *time.Time `json:"DeviceLastAuthenticatedDate,omitempty"`
    DeviceLastModifiedDate *time.Time `json:"DeviceLastModifiedDate,omitempty"`
    
}

