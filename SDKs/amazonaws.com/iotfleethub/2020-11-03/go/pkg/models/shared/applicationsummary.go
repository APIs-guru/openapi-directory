package shared

// ApplicationSummary
// <p>A summary of information about a AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
type ApplicationSummary struct {
	ApplicationCreationDate   *int64                `json:"applicationCreationDate,omitempty"`
	ApplicationDescription    *string               `json:"applicationDescription,omitempty"`
	ApplicationID             string                `json:"applicationId"`
	ApplicationLastUpdateDate *int64                `json:"applicationLastUpdateDate,omitempty"`
	ApplicationName           string                `json:"applicationName"`
	ApplicationState          *ApplicationStateEnum `json:"applicationState,omitempty"`
	ApplicationURL            string                `json:"applicationUrl"`
}
