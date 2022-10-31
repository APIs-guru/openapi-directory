package shared

import (
"time")

type ColumnStatistics struct {
    AnalyzedTime time.Time `json:"AnalyzedTime"`
    ColumnName string `json:"ColumnName"`
    ColumnType string `json:"ColumnType"`
    StatisticsData ColumnStatisticsData `json:"StatisticsData"`
    
}

