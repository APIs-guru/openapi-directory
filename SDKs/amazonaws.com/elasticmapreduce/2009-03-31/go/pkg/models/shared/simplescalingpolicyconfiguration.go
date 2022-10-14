package shared

type SimpleScalingPolicyConfiguration struct {
	AdjustmentType    *AdjustmentTypeEnum `json:"AdjustmentType,omitempty"`
	CoolDown          *int64              `json:"CoolDown,omitempty"`
	ScalingAdjustment int64               `json:"ScalingAdjustment"`
}
