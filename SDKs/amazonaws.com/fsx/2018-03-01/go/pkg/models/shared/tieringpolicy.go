package shared

type TieringPolicy struct {
	CoolingPeriod *int64                 `json:"CoolingPeriod,omitempty"`
	Name          *TieringPolicyNameEnum `json:"Name,omitempty"`
}
