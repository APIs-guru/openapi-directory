package shared

// FpgaImageAttribute
// Describes an Amazon FPGA image (AFI) attribute.
type FpgaImageAttribute struct {
	Description     *string
	FpgaImageID     *string
	LoadPermissions []LoadPermission
	Name            *string
	ProductCodes    []ProductCode
}
