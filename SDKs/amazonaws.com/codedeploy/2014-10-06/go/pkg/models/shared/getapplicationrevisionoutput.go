package shared

type GetApplicationRevisionOutput struct {
	ApplicationName *string              `json:"applicationName,omitempty"`
	Revision        *RevisionLocation    `json:"revision,omitempty"`
	RevisionInfo    *GenericRevisionInfo `json:"revisionInfo,omitempty"`
}
