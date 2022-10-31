package shared

type PlatformTypeEnum string

const (
	PlatformTypeEnumDebian        PlatformTypeEnum = "DEBIAN"
	PlatformTypeEnumAmazonLinux   PlatformTypeEnum = "AMAZON_LINUX"
	PlatformTypeEnumUbuntu        PlatformTypeEnum = "UBUNTU"
	PlatformTypeEnumWindowsServer PlatformTypeEnum = "WINDOWS_SERVER"
)
