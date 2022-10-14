package shared

import (
	"time"
)

type UpdateSystemModelsPackage struct {
	Autorun         *bool     `json:"Autorun,omitempty" form:"name=Autorun"`
	Crc             string    `json:"CRC" form:"name=CRC"`
	Description     string    `json:"Description" form:"name=Description"`
	LocalizedName   *string   `json:"LocalizedName,omitempty" form:"name=LocalizedName"`
	Notes           *string   `json:"Notes,omitempty" form:"name=Notes"`
	PackageID       *string   `json:"PackageID,omitempty" form:"name=PackageID"`
	PackageTypeID   string    `json:"PackageTypeID" form:"name=PackageTypeID"`
	PreviousVersion *int32    `json:"PreviousVersion,omitempty" form:"name=PreviousVersion"`
	ReleaseDate     time.Time `json:"ReleaseDate" form:"name=ReleaseDate"`
	Released        *bool     `json:"Released,omitempty" form:"name=Released"`
	RemoveOnSuccess *bool     `json:"RemoveOnSuccess,omitempty" form:"name=RemoveOnSuccess"`
	Size            *int64    `json:"Size,omitempty" form:"name=Size"`
	Switches        *string   `json:"Switches,omitempty" form:"name=Switches"`
	URL             string    `json:"Url" form:"name=Url"`
	Version         int32     `json:"Version" form:"name=Version"`
}
