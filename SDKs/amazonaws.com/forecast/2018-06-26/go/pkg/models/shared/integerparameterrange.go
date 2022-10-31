package shared



type IntegerParameterRange struct {
    MaxValue int64 `json:"MaxValue"`
    MinValue int64 `json:"MinValue"`
    Name string `json:"Name"`
    ScalingType *ScalingTypeEnum `json:"ScalingType,omitempty"`
    
}

