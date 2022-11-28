package shared

// RevisionInfo
// Information about an application revision.
type RevisionInfo struct {
	GenericRevisionInfo *GenericRevisionInfo `json:"genericRevisionInfo,omitempty"`
	RevisionLocation    *RevisionLocation    `json:"revisionLocation,omitempty"`
}
