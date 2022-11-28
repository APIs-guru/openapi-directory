package shared

import (
	"time"
)

// UpdateSystemModelsUpdateMetricsData
// Model that retrieves the data for UpdateMetrics
type UpdateSystemModelsUpdateMetricsData struct {
	ActiveVersion         *string                                                          `json:"ActiveVersion,omitempty"`
	ActiveVersionByClient []UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecord `json:"ActiveVersionByClient,omitempty"`
	CurrentStateByClient  []UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecord  `json:"CurrentStateByClient,omitempty"`
	CutOffDate            *time.Time                                                       `json:"CutOffDate,omitempty"`
	DataRefreshed         *time.Time                                                       `json:"DataRefreshed,omitempty"`
	FilteredClientCount   *int32                                                           `json:"FilteredClientCount,omitempty"`
	PackageErrors         []UpdateSystemModelsUpdateMetricsDataPackageErrorsRecord         `json:"PackageErrors,omitempty"`
	TotalClientCount      *int32                                                           `json:"TotalClientCount,omitempty"`
}
