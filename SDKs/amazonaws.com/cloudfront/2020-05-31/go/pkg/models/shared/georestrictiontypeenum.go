package shared

type GeoRestrictionTypeEnum string

const (
	GeoRestrictionTypeEnumBlacklist GeoRestrictionTypeEnum = "blacklist"
	GeoRestrictionTypeEnumWhitelist GeoRestrictionTypeEnum = "whitelist"
	GeoRestrictionTypeEnumNone      GeoRestrictionTypeEnum = "none"
)
