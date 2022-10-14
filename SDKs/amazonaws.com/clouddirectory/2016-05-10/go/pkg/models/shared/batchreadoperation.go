package shared

type BatchReadOperation struct {
	GetLinkAttributes      *BatchGetLinkAttributes      `json:"GetLinkAttributes,omitempty"`
	GetObjectAttributes    *BatchGetObjectAttributes    `json:"GetObjectAttributes,omitempty"`
	GetObjectInformation   *BatchGetObjectInformation   `json:"GetObjectInformation,omitempty"`
	ListAttachedIndices    *BatchListAttachedIndices    `json:"ListAttachedIndices,omitempty"`
	ListIncomingTypedLinks *BatchListIncomingTypedLinks `json:"ListIncomingTypedLinks,omitempty"`
	ListIndex              *BatchListIndex              `json:"ListIndex,omitempty"`
	ListObjectAttributes   *BatchListObjectAttributes   `json:"ListObjectAttributes,omitempty"`
	ListObjectChildren     *BatchListObjectChildren     `json:"ListObjectChildren,omitempty"`
	ListObjectParentPaths  *BatchListObjectParentPaths  `json:"ListObjectParentPaths,omitempty"`
	ListObjectPolicies     *BatchListObjectPolicies     `json:"ListObjectPolicies,omitempty"`
	ListOutgoingTypedLinks *BatchListOutgoingTypedLinks `json:"ListOutgoingTypedLinks,omitempty"`
	ListPolicyAttachments  *BatchListPolicyAttachments  `json:"ListPolicyAttachments,omitempty"`
	LookupPolicy           *BatchLookupPolicy           `json:"LookupPolicy,omitempty"`
}
