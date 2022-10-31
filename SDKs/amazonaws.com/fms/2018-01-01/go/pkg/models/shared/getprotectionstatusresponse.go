package shared

type GetProtectionStatusResponse struct {
	AdminAccountID *string                  `json:"AdminAccountId,omitempty"`
	Data           *string                  `json:"Data,omitempty"`
	NextToken      *string                  `json:"NextToken,omitempty"`
	ServiceType    *SecurityServiceTypeEnum `json:"ServiceType,omitempty"`
}
