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
	Categories    []GlobalResourcesSharedModelsGlobalImageCategory `json:"Categories,omitempty"`
	Date          *time.Time                                       `json:"Date,omitempty"`
	Description   string                                           `json:"Description"`
	Height        int32                                            `json:"Height"`
	ID            *string                                          `json:"Id,omitempty"`
	Name          string                                           `json:"Name"`
	Publisher     *string                                          `json:"Publisher,omitempty"`
	Size          *int64                                           `json:"Size,omitempty"`
	State         GlobalResourcesSharedModelsGlobalImageStateEnum  `json:"State"`
	ThumbnailCrc  string                                           `json:"ThumbnailCRC"`
	ThumbnailSize *int64                                           `json:"ThumbnailSize,omitempty"`
	Width         int32                                            `json:"Width"`
}
