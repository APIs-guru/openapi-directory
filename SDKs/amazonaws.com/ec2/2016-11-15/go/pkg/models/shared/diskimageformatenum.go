package shared

type DiskImageFormatEnum string

const (
	DiskImageFormatEnumVmdk DiskImageFormatEnum = "VMDK"
	DiskImageFormatEnumRaw  DiskImageFormatEnum = "RAW"
	DiskImageFormatEnumVhd  DiskImageFormatEnum = "VHD"
)
