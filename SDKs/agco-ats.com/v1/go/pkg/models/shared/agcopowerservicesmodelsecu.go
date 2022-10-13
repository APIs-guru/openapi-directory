package shared

type AgcoPowerServicesModelsEcuStateEnum string

const (
	AgcoPowerServicesModelsEcuStateEnumActive   AgcoPowerServicesModelsEcuStateEnum = "Active"
	AgcoPowerServicesModelsEcuStateEnumInactive AgcoPowerServicesModelsEcuStateEnum = "Inactive"
	AgcoPowerServicesModelsEcuStateEnumDamaged  AgcoPowerServicesModelsEcuStateEnum = "Damaged"
)

type AgcoPowerServicesModelsEcu struct {
	ActivationCode          *string                             `json:"ActivationCode" form:"name=ActivationCode"`
	DamagedDescription      *string                             `json:"DamagedDescription" form:"name=DamagedDescription"`
	EngineSerialNumber      string                              `json:"EngineSerialNumber" form:"name=EngineSerialNumber"`
	ReplacesEcuSerialNumber *string                             `json:"ReplacesECUSerialNumber" form:"name=ReplacesECUSerialNumber"`
	SerialNumber            string                              `json:"SerialNumber" form:"name=SerialNumber"`
	State                   AgcoPowerServicesModelsEcuStateEnum `json:"State" form:"name=State"`
}
