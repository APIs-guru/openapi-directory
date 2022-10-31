package shared




type AgcoPowerServicesModelsEcuStateEnum string

const (
    AgcoPowerServicesModelsEcuStateEnumActive AgcoPowerServicesModelsEcuStateEnum = "Active"
AgcoPowerServicesModelsEcuStateEnumInactive AgcoPowerServicesModelsEcuStateEnum = "Inactive"
AgcoPowerServicesModelsEcuStateEnumDamaged AgcoPowerServicesModelsEcuStateEnum = "Damaged"
)


type AgcoPowerServicesModelsEcu struct {
    ActivationCode *string `json:"ActivationCode,omitempty" form:"name=ActivationCode"`
    DamagedDescription *string `json:"DamagedDescription,omitempty" form:"name=DamagedDescription"`
    EngineSerialNumber string `json:"EngineSerialNumber" form:"name=EngineSerialNumber"`
    ReplacesEcuSerialNumber *string `json:"ReplacesECUSerialNumber,omitempty" form:"name=ReplacesECUSerialNumber"`
    SerialNumber string `json:"SerialNumber" form:"name=SerialNumber"`
    State AgcoPowerServicesModelsEcuStateEnum `json:"State" form:"name=State"`
    
}

