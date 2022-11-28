package shared

type PredefinedLoadMetricTypeEnum string

const (
	PredefinedLoadMetricTypeEnumAsgTotalCPUUtilization     PredefinedLoadMetricTypeEnum = "ASGTotalCPUUtilization"
	PredefinedLoadMetricTypeEnumAsgTotalNetworkIn          PredefinedLoadMetricTypeEnum = "ASGTotalNetworkIn"
	PredefinedLoadMetricTypeEnumAsgTotalNetworkOut         PredefinedLoadMetricTypeEnum = "ASGTotalNetworkOut"
	PredefinedLoadMetricTypeEnumAlbTargetGroupRequestCount PredefinedLoadMetricTypeEnum = "ALBTargetGroupRequestCount"
)
