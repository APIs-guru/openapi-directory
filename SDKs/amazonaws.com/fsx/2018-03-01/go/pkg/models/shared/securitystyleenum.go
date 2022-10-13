package shared

type SecurityStyleEnum string

const (
	SecurityStyleEnumUnix  SecurityStyleEnum = "UNIX"
	SecurityStyleEnumNtfs  SecurityStyleEnum = "NTFS"
	SecurityStyleEnumMixed SecurityStyleEnum = "MIXED"
)
