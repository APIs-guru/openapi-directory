package shared

type GetApplicationRevisionInput struct {
	ApplicationName string           `json:"applicationName"`
	Revision        RevisionLocation `json:"revision"`
}
