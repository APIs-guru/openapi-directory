package shared

type TieringPolicy struct {
	CoolingPeriod *int64                 `json:"CoolingPeriod"`
	Name          *TieringPolicyNameEnum `json:"Name"`
}
