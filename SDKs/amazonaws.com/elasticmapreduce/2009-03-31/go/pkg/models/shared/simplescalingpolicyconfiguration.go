package shared

type SimpleScalingPolicyConfiguration struct {
	AdjustmentType    *AdjustmentTypeEnum `json:"AdjustmentType"`
	CoolDown          *int64              `json:"CoolDown"`
	ScalingAdjustment int64               `json:"ScalingAdjustment"`
}
