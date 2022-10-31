package shared

type ForecastDataTypeEnum string

const (
	ForecastDataTypeEnumCapacityForecast           ForecastDataTypeEnum = "CapacityForecast"
	ForecastDataTypeEnumLoadForecast               ForecastDataTypeEnum = "LoadForecast"
	ForecastDataTypeEnumScheduledActionMinCapacity ForecastDataTypeEnum = "ScheduledActionMinCapacity"
	ForecastDataTypeEnumScheduledActionMaxCapacity ForecastDataTypeEnum = "ScheduledActionMaxCapacity"
)
