package shared

type DirectoryTypeEnum string

const (
	DirectoryTypeEnumSimpleAd          DirectoryTypeEnum = "SimpleAD"
	DirectoryTypeEnumAdConnector       DirectoryTypeEnum = "ADConnector"
	DirectoryTypeEnumMicrosoftAd       DirectoryTypeEnum = "MicrosoftAD"
	DirectoryTypeEnumSharedMicrosoftAd DirectoryTypeEnum = "SharedMicrosoftAD"
)
