package shared

type GlobalResourcesSharedModelsFileDownloadStateEnum string

const (
	GlobalResourcesSharedModelsFileDownloadStateEnumCreated   GlobalResourcesSharedModelsFileDownloadStateEnum = "Created"
	GlobalResourcesSharedModelsFileDownloadStateEnumAvailable GlobalResourcesSharedModelsFileDownloadStateEnum = "Available"
	GlobalResourcesSharedModelsFileDownloadStateEnumRemoved   GlobalResourcesSharedModelsFileDownloadStateEnum = "Removed"
)

type GlobalResourcesSharedModelsFileDownload struct {
	Crc         string                                           `json:"CRC" form:"name=CRC"`
	ContentType string                                           `json:"ContentType" form:"name=ContentType"`
	Description string                                           `json:"Description" form:"name=Description"`
	ID          *string                                          `json:"Id" form:"name=Id"`
	IsPublic    bool                                             `json:"IsPublic" form:"name=IsPublic"`
	Name        string                                           `json:"Name" form:"name=Name"`
	Path        string                                           `json:"Path" form:"name=Path"`
	Size        *int64                                           `json:"Size" form:"name=Size"`
	State       GlobalResourcesSharedModelsFileDownloadStateEnum `json:"State" form:"name=State"`
}
