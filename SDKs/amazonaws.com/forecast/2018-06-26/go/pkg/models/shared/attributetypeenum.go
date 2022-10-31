package shared

type AttributeTypeEnum string

const (
	AttributeTypeEnumString      AttributeTypeEnum = "string"
	AttributeTypeEnumInteger     AttributeTypeEnum = "integer"
	AttributeTypeEnumFloat       AttributeTypeEnum = "float"
	AttributeTypeEnumTimestamp   AttributeTypeEnum = "timestamp"
	AttributeTypeEnumGeolocation AttributeTypeEnum = "geolocation"
)
