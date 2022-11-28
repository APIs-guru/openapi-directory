package shared

type MetricTypeEnum string

const (
	MetricTypeEnumAsgAverageCPUUtilization MetricTypeEnum = "ASGAverageCPUUtilization"
	MetricTypeEnumAsgAverageNetworkIn      MetricTypeEnum = "ASGAverageNetworkIn"
	MetricTypeEnumAsgAverageNetworkOut     MetricTypeEnum = "ASGAverageNetworkOut"
	MetricTypeEnumAlbRequestCountPerTarget MetricTypeEnum = "ALBRequestCountPerTarget"
)
