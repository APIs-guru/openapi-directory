package shared

type QuotaSettings struct {
	Limit  *int64               `json:"limit,omitempty"`
	Offset *int64               `json:"offset,omitempty"`
	Period *QuotaPeriodTypeEnum `json:"period,omitempty"`
}
