package shared

type GetApplicationRevisionOutput struct {
	ApplicationName *string              `json:"applicationName"`
	Revision        *RevisionLocation    `json:"revision"`
	RevisionInfo    *GenericRevisionInfo `json:"revisionInfo"`
}
