package shared

type RevisionInfo struct {
	GenericRevisionInfo *GenericRevisionInfo `json:"genericRevisionInfo"`
	RevisionLocation    *RevisionLocation    `json:"revisionLocation"`
}
