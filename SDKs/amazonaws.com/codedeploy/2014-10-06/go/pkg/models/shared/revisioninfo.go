package shared

type RevisionInfo struct {
	GenericRevisionInfo *GenericRevisionInfo `json:"genericRevisionInfo,omitempty"`
	RevisionLocation    *RevisionLocation    `json:"revisionLocation,omitempty"`
}
