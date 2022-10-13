package shared

type GetProtectionStatusResponse struct {
	AdminAccountID *string                  `json:"AdminAccountId"`
	Data           *string                  `json:"Data"`
	NextToken      *string                  `json:"NextToken"`
	ServiceType    *SecurityServiceTypeEnum `json:"ServiceType"`
}
