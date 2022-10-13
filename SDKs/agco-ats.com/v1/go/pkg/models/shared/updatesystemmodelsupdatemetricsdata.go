package shared

import (
	"time"
)

type UpdateSystemModelsUpdateMetricsData struct {
	ActiveVersion         *string                                                          `json:"ActiveVersion"`
	ActiveVersionByClient []UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecord `json:"ActiveVersionByClient"`
	CurrentStateByClient  []UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecord  `json:"CurrentStateByClient"`
	CutOffDate            *time.Time                                                       `json:"CutOffDate"`
	DataRefreshed         *time.Time                                                       `json:"DataRefreshed"`
	FilteredClientCount   *int32                                                           `json:"FilteredClientCount"`
	PackageErrors         []UpdateSystemModelsUpdateMetricsDataPackageErrorsRecord         `json:"PackageErrors"`
	TotalClientCount      *int32                                                           `json:"TotalClientCount"`
}
