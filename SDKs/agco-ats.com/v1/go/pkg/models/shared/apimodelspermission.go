package shared

type APIModelsPermissionDataRequiredEnum string

const (
	APIModelsPermissionDataRequiredEnumYes      APIModelsPermissionDataRequiredEnum = "Yes"
	APIModelsPermissionDataRequiredEnumNo       APIModelsPermissionDataRequiredEnum = "No"
	APIModelsPermissionDataRequiredEnumOptional APIModelsPermissionDataRequiredEnum = "Optional"
)

type APIModelsPermission struct {
	DataDescription *string                             `json:"DataDescription,omitempty" form:"name=DataDescription"`
	DataRequired    APIModelsPermissionDataRequiredEnum `json:"DataRequired" form:"name=DataRequired"`
	Description     *string                             `json:"Description,omitempty" form:"name=Description"`
	ID              *int32                              `json:"Id,omitempty" form:"name=Id"`
	Name            string                              `json:"Name" form:"name=Name"`
}
