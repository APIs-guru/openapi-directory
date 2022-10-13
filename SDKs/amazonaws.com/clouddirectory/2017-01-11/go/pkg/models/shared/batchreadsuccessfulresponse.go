package shared

type BatchReadSuccessfulResponse struct {
	GetLinkAttributes      *BatchGetLinkAttributesResponse      `json:"GetLinkAttributes"`
	GetObjectAttributes    *BatchGetObjectAttributesResponse    `json:"GetObjectAttributes"`
	GetObjectInformation   *BatchGetObjectInformationResponse   `json:"GetObjectInformation"`
	ListAttachedIndices    *BatchListAttachedIndicesResponse    `json:"ListAttachedIndices"`
	ListIncomingTypedLinks *BatchListIncomingTypedLinksResponse `json:"ListIncomingTypedLinks"`
	ListIndex              *BatchListIndexResponse              `json:"ListIndex"`
	ListObjectAttributes   *BatchListObjectAttributesResponse   `json:"ListObjectAttributes"`
	ListObjectChildren     *BatchListObjectChildrenResponse     `json:"ListObjectChildren"`
	ListObjectParentPaths  *BatchListObjectParentPathsResponse  `json:"ListObjectParentPaths"`
	ListObjectParents      *BatchListObjectParentsResponse      `json:"ListObjectParents"`
	ListObjectPolicies     *BatchListObjectPoliciesResponse     `json:"ListObjectPolicies"`
	ListOutgoingTypedLinks *BatchListOutgoingTypedLinksResponse `json:"ListOutgoingTypedLinks"`
	ListPolicyAttachments  *BatchListPolicyAttachmentsResponse  `json:"ListPolicyAttachments"`
	LookupPolicy           *BatchLookupPolicyResponse           `json:"LookupPolicy"`
}
