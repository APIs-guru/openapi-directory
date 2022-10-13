package shared

import (
	"time"
)

type GlobalResourcesSharedModelsGlobalImageStateEnum string

const (
	GlobalResourcesSharedModelsGlobalImageStateEnumCreated   GlobalResourcesSharedModelsGlobalImageStateEnum = "Created"
	GlobalResourcesSharedModelsGlobalImageStateEnumAvailable GlobalResourcesSharedModelsGlobalImageStateEnum = "Available"
	GlobalResourcesSharedModelsGlobalImageStateEnumRemoved   GlobalResourcesSharedModelsGlobalImageStateEnum = "Removed"
)

type GlobalResourcesSharedModelsGlobalImage struct {
	Crc           string                                           `json:"CRC"`
	Categories    []GlobalResourcesSharedModelsGlobalImageCategory `json:"Categories"`
	Date          *time.Time                                       `json:"Date"`
	Description   string                                           `json:"Description"`
	Height        int32                                            `json:"Height"`
	ID            *string                                          `json:"Id"`
	Name          string                                           `json:"Name"`
	Publisher     *string                                          `json:"Publisher"`
	Size          *int64                                           `json:"Size"`
	State         GlobalResourcesSharedModelsGlobalImageStateEnum  `json:"State"`
	ThumbnailCrc  string                                           `json:"ThumbnailCRC"`
	ThumbnailSize *int64                                           `json:"ThumbnailSize"`
	Width         int32                                            `json:"Width"`
}
