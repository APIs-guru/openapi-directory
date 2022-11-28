package shared

import (
	"time"
)

// FpgaImage
// Describes an Amazon FPGA image (AFI).
type FpgaImage struct {
	CreateTime           *time.Time
	DataRetentionSupport *bool
	Description          *string
	FpgaImageGlobalID    *string
	FpgaImageID          *string
	Name                 *string
	OwnerAlias           *string
	OwnerID              *string
	PciID                *PciID
	ProductCodes         []ProductCode
	Public               *bool
	ShellVersion         *string
	State                *FpgaImageState
	Tags                 []Tag
	UpdateTime           *time.Time
}
