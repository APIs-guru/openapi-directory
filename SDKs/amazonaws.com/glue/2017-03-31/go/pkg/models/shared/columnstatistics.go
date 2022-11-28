package shared

import (
	"time"
)

// ColumnStatistics
// Represents the generated column-level statistics for a table or partition.
type ColumnStatistics struct {
	AnalyzedTime   time.Time            `json:"AnalyzedTime"`
	ColumnName     string               `json:"ColumnName"`
	ColumnType     string               `json:"ColumnType"`
	StatisticsData ColumnStatisticsData `json:"StatisticsData"`
}
