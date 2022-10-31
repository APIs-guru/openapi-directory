package shared

type AdjustmentTypeEnum string

const (
	AdjustmentTypeEnumChangeInCapacity        AdjustmentTypeEnum = "CHANGE_IN_CAPACITY"
	AdjustmentTypeEnumPercentChangeInCapacity AdjustmentTypeEnum = "PERCENT_CHANGE_IN_CAPACITY"
	AdjustmentTypeEnumExactCapacity           AdjustmentTypeEnum = "EXACT_CAPACITY"
)
