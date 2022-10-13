package shared

type AdditionalInstanceConfiguration struct {
	SystemsManagerAgent *SystemsManagerAgent `json:"systemsManagerAgent"`
	UserDataOverride    *string              `json:"userDataOverride"`
}
