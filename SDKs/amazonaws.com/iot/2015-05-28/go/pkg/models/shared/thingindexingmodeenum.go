package shared

type ThingIndexingModeEnum string

const (
	ThingIndexingModeEnumOff               ThingIndexingModeEnum = "OFF"
	ThingIndexingModeEnumRegistry          ThingIndexingModeEnum = "REGISTRY"
	ThingIndexingModeEnumRegistryAndShadow ThingIndexingModeEnum = "REGISTRY_AND_SHADOW"
)
