package shared

type QuotaSettings struct {
	Limit  *int64               `json:"limit"`
	Offset *int64               `json:"offset"`
	Period *QuotaPeriodTypeEnum `json:"period"`
}
