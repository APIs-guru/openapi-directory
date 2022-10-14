package shared

type ComponentRunWith struct {
	PosixUser            *string               `json:"posixUser,omitempty"`
	SystemResourceLimits *SystemResourceLimits `json:"systemResourceLimits,omitempty"`
}
