package shared

// BatchReadSuccessfulResponse
// Represents the output of a <code>BatchRead</code> success response operation.
type BatchReadSuccessfulResponse struct {
	GetLinkAttributes      *BatchGetLinkAttributesResponse      `json:"GetLinkAttributes,omitempty"`
	GetObjectAttributes    *BatchGetObjectAttributesResponse    `json:"GetObjectAttributes,omitempty"`
	GetObjectInformation   *BatchGetObjectInformationResponse   `json:"GetObjectInformation,omitempty"`
	ListAttachedIndices    *BatchListAttachedIndicesResponse    `json:"ListAttachedIndices,omitempty"`
	ListIncomingTypedLinks *BatchListIncomingTypedLinksResponse `json:"ListIncomingTypedLinks,omitempty"`
	ListIndex              *BatchListIndexResponse              `json:"ListIndex,omitempty"`
	ListObjectAttributes   *BatchListObjectAttributesResponse   `json:"ListObjectAttributes,omitempty"`
	ListObjectChildren     *BatchListObjectChildrenResponse     `json:"ListObjectChildren,omitempty"`
	ListObjectParentPaths  *BatchListObjectParentPathsResponse  `json:"ListObjectParentPaths,omitempty"`
	ListObjectPolicies     *BatchListObjectPoliciesResponse     `json:"ListObjectPolicies,omitempty"`
	ListOutgoingTypedLinks *BatchListOutgoingTypedLinksResponse `json:"ListOutgoingTypedLinks,omitempty"`
	ListPolicyAttachments  *BatchListPolicyAttachmentsResponse  `json:"ListPolicyAttachments,omitempty"`
	LookupPolicy           *BatchLookupPolicyResponse           `json:"LookupPolicy,omitempty"`
}
