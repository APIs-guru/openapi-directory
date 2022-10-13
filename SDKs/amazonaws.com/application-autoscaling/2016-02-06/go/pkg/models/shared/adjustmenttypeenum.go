package shared

type AdjustmentTypeEnum string

const (
	AdjustmentTypeEnumChangeInCapacity        AdjustmentTypeEnum = "ChangeInCapacity"
	AdjustmentTypeEnumPercentChangeInCapacity AdjustmentTypeEnum = "PercentChangeInCapacity"
	AdjustmentTypeEnumExactCapacity           AdjustmentTypeEnum = "ExactCapacity"
)
