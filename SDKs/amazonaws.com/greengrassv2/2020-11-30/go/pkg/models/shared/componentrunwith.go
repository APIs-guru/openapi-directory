package shared

type ComponentRunWith struct {
	PosixUser            *string               `json:"posixUser"`
	SystemResourceLimits *SystemResourceLimits `json:"systemResourceLimits"`
}
