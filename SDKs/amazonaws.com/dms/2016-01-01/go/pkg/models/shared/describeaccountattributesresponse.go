package shared

type DescribeAccountAttributesResponse struct {
	AccountQuotas           []AccountQuota `json:"AccountQuotas,omitempty"`
	UniqueAccountIdentifier *string        `json:"UniqueAccountIdentifier,omitempty"`
}
