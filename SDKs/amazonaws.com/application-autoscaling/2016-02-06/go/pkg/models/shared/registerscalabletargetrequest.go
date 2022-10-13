package shared

type RegisterScalableTargetRequest struct {
	MaxCapacity       *int64                `json:"MaxCapacity"`
	MinCapacity       *int64                `json:"MinCapacity"`
	ResourceID        string                `json:"ResourceId"`
	RoleArn           *string               `json:"RoleARN"`
	ScalableDimension ScalableDimensionEnum `json:"ScalableDimension"`
	ServiceNamespace  ServiceNamespaceEnum  `json:"ServiceNamespace"`
	SuspendedState    *SuspendedState       `json:"SuspendedState"`
}
