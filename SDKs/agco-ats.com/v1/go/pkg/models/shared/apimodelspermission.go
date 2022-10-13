package shared

type APIModelsPermissionDataRequiredEnum string

const (
	APIModelsPermissionDataRequiredEnumYes      APIModelsPermissionDataRequiredEnum = "Yes"
	APIModelsPermissionDataRequiredEnumNo       APIModelsPermissionDataRequiredEnum = "No"
	APIModelsPermissionDataRequiredEnumOptional APIModelsPermissionDataRequiredEnum = "Optional"
)

type APIModelsPermission struct {
	DataDescription *string                             `json:"DataDescription" form:"name=DataDescription"`
	DataRequired    APIModelsPermissionDataRequiredEnum `json:"DataRequired" form:"name=DataRequired"`
	Description     *string                             `json:"Description" form:"name=Description"`
	ID              *int32                              `json:"Id" form:"name=Id"`
	Name            string                              `json:"Name" form:"name=Name"`
}
