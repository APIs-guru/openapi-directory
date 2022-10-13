package shared

type ApplicationSummary struct {
	ApplicationCreationDate   *int64                `json:"applicationCreationDate"`
	ApplicationDescription    *string               `json:"applicationDescription"`
	ApplicationID             string                `json:"applicationId"`
	ApplicationLastUpdateDate *int64                `json:"applicationLastUpdateDate"`
	ApplicationName           string                `json:"applicationName"`
	ApplicationState          *ApplicationStateEnum `json:"applicationState"`
	ApplicationURL            string                `json:"applicationUrl"`
}
