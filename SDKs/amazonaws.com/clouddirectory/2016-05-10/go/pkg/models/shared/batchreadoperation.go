package shared

type BatchReadOperation struct {
	GetLinkAttributes      *BatchGetLinkAttributes      `json:"GetLinkAttributes"`
	GetObjectAttributes    *BatchGetObjectAttributes    `json:"GetObjectAttributes"`
	GetObjectInformation   *BatchGetObjectInformation   `json:"GetObjectInformation"`
	ListAttachedIndices    *BatchListAttachedIndices    `json:"ListAttachedIndices"`
	ListIncomingTypedLinks *BatchListIncomingTypedLinks `json:"ListIncomingTypedLinks"`
	ListIndex              *BatchListIndex              `json:"ListIndex"`
	ListObjectAttributes   *BatchListObjectAttributes   `json:"ListObjectAttributes"`
	ListObjectChildren     *BatchListObjectChildren     `json:"ListObjectChildren"`
	ListObjectParentPaths  *BatchListObjectParentPaths  `json:"ListObjectParentPaths"`
	ListObjectPolicies     *BatchListObjectPolicies     `json:"ListObjectPolicies"`
	ListOutgoingTypedLinks *BatchListOutgoingTypedLinks `json:"ListOutgoingTypedLinks"`
	ListPolicyAttachments  *BatchListPolicyAttachments  `json:"ListPolicyAttachments"`
	LookupPolicy           *BatchLookupPolicy           `json:"LookupPolicy"`
}
