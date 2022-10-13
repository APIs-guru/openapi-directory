package shared

type AgcoPowerServicesModelsUserStatusStateEnum string

const (
	AgcoPowerServicesModelsUserStatusStateEnumActive   AgcoPowerServicesModelsUserStatusStateEnum = "Active"
	AgcoPowerServicesModelsUserStatusStateEnumInactive AgcoPowerServicesModelsUserStatusStateEnum = "Inactive"
	AgcoPowerServicesModelsUserStatusStateEnumNone     AgcoPowerServicesModelsUserStatusStateEnum = "None"
)

type AgcoPowerServicesModelsUserStatus struct {
	DealerCode  string                                      `json:"DealerCode" form:"name=DealerCode"`
	State       *AgcoPowerServicesModelsUserStatusStateEnum `json:"State" form:"name=State"`
	VoucherCode string                                      `json:"VoucherCode" form:"name=VoucherCode"`
}
