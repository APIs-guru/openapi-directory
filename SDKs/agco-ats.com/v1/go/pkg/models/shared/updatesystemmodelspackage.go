package shared

import (
	"time"
)

type UpdateSystemModelsPackage struct {
	Autorun         *bool     `json:"Autorun" form:"name=Autorun"`
	Crc             string    `json:"CRC" form:"name=CRC"`
	Description     string    `json:"Description" form:"name=Description"`
	LocalizedName   *string   `json:"LocalizedName" form:"name=LocalizedName"`
	Notes           *string   `json:"Notes" form:"name=Notes"`
	PackageID       *string   `json:"PackageID" form:"name=PackageID"`
	PackageTypeID   string    `json:"PackageTypeID" form:"name=PackageTypeID"`
	PreviousVersion *int32    `json:"PreviousVersion" form:"name=PreviousVersion"`
	ReleaseDate     time.Time `json:"ReleaseDate" form:"name=ReleaseDate"`
	Released        *bool     `json:"Released" form:"name=Released"`
	RemoveOnSuccess *bool     `json:"RemoveOnSuccess" form:"name=RemoveOnSuccess"`
	Size            *int64    `json:"Size" form:"name=Size"`
	Switches        *string   `json:"Switches" form:"name=Switches"`
	URL             string    `json:"Url" form:"name=Url"`
	Version         int32     `json:"Version" form:"name=Version"`
}
