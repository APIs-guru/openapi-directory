package shared

import (
	"time"
)

type DeviceType struct {
	DeviceAttributes            []AttributeType `json:"DeviceAttributes"`
	DeviceCreateDate            *time.Time      `json:"DeviceCreateDate"`
	DeviceKey                   *string         `json:"DeviceKey"`
	DeviceLastAuthenticatedDate *time.Time      `json:"DeviceLastAuthenticatedDate"`
	DeviceLastModifiedDate      *time.Time      `json:"DeviceLastModifiedDate"`
}
