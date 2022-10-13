package shared

type RegisterApplicationRevisionInput struct {
	ApplicationName string           `json:"applicationName"`
	Description     *string          `json:"description"`
	Revision        RevisionLocation `json:"revision"`
}
