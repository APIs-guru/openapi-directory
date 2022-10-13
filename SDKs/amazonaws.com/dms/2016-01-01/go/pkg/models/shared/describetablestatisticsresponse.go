package shared

type DescribeTableStatisticsResponse struct {
	Marker             *string           `json:"Marker"`
	ReplicationTaskArn *string           `json:"ReplicationTaskArn"`
	TableStatistics    []TableStatistics `json:"TableStatistics"`
}
