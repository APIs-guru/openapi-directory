package shared

import (
"time")

type GetScalingPlanResourceForecastDataRequest struct {
    EndTime time.Time `json:"EndTime"`
    ForecastDataType ForecastDataTypeEnum `json:"ForecastDataType"`
    ResourceID string `json:"ResourceId"`
    ScalableDimension ScalableDimensionEnum `json:"ScalableDimension"`
    ScalingPlanName string `json:"ScalingPlanName"`
    ScalingPlanVersion int64 `json:"ScalingPlanVersion"`
    ServiceNamespace ServiceNamespaceEnum `json:"ServiceNamespace"`
    StartTime time.Time `json:"StartTime"`
    
}

