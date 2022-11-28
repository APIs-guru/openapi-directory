package shared

// DescribeAccountAttributesResponse
// <p/>
type DescribeAccountAttributesResponse struct {
	AccountQuotas           []AccountQuota `json:"AccountQuotas,omitempty"`
	UniqueAccountIdentifier *string        `json:"UniqueAccountIdentifier,omitempty"`
}
