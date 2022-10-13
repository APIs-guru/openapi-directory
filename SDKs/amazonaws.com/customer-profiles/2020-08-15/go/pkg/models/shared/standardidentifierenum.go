package shared

type StandardIdentifierEnum string

const (
	StandardIdentifierEnumProfile    StandardIdentifierEnum = "PROFILE"
	StandardIdentifierEnumAsset      StandardIdentifierEnum = "ASSET"
	StandardIdentifierEnumCase       StandardIdentifierEnum = "CASE"
	StandardIdentifierEnumUnique     StandardIdentifierEnum = "UNIQUE"
	StandardIdentifierEnumSecondary  StandardIdentifierEnum = "SECONDARY"
	StandardIdentifierEnumLookupOnly StandardIdentifierEnum = "LOOKUP_ONLY"
	StandardIdentifierEnumNewOnly    StandardIdentifierEnum = "NEW_ONLY"
)
