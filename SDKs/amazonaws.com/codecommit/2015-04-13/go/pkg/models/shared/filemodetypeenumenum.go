package shared

type FileModeTypeEnumEnum string

const (
	FileModeTypeEnumEnumExecutable FileModeTypeEnumEnum = "EXECUTABLE"
	FileModeTypeEnumEnumNormal     FileModeTypeEnumEnum = "NORMAL"
	FileModeTypeEnumEnumSymlink    FileModeTypeEnumEnum = "SYMLINK"
)
