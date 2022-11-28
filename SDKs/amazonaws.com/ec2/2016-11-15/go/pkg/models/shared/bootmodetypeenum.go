package shared

type BootModeTypeEnum string

const (
	BootModeTypeEnumLegacyBios BootModeTypeEnum = "legacy-bios"
	BootModeTypeEnumUefi       BootModeTypeEnum = "uefi"
)
