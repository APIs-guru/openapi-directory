package shared

import (
	"time"
)

type GetPredictiveScalingForecastAnswer struct {
	CapacityForecast CapacityForecast
	LoadForecast     []LoadForecast
	UpdateTime       time.Time
}
