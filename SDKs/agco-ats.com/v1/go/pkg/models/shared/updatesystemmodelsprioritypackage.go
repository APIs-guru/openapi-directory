package shared

import (
"time")

type UpdateSystemModelsPriorityPackage struct {
    Autorun *bool `json:"Autorun,omitempty" form:"name=Autorun"`
    Crc *string `json:"CRC,omitempty" form:"name=CRC"`
    ClientID string `json:"ClientID" form:"name=ClientID"`
    Description *string `json:"Description,omitempty" form:"name=Description"`
    Notes *string `json:"Notes,omitempty" form:"name=Notes"`
    PackageID string `json:"PackageID" form:"name=PackageID"`
    PackageTypeID *string `json:"PackageTypeID,omitempty" form:"name=PackageTypeID"`
    PreviousVersion *int32 `json:"PreviousVersion,omitempty" form:"name=PreviousVersion"`
    PriorityPackageID *string `json:"PriorityPackageID,omitempty" form:"name=PriorityPackageID"`
    ReleaseDate *time.Time `json:"ReleaseDate,omitempty" form:"name=ReleaseDate"`
    Released *bool `json:"Released,omitempty" form:"name=Released"`
    RemoveOnSuccess *bool `json:"RemoveOnSuccess,omitempty" form:"name=RemoveOnSuccess"`
    Size *int64 `json:"Size,omitempty" form:"name=Size"`
    Switches *string `json:"Switches,omitempty" form:"name=Switches"`
    TimeStamp *time.Time `json:"TimeStamp,omitempty" form:"name=TimeStamp"`
    URL *string `json:"Url,omitempty" form:"name=Url"`
    Version *int32 `json:"Version,omitempty" form:"name=Version"`
    
}

