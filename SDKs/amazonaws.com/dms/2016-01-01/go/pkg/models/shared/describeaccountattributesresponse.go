package shared

type DescribeAccountAttributesResponse struct {
	AccountQuotas           []AccountQuota `json:"AccountQuotas"`
	UniqueAccountIdentifier *string        `json:"UniqueAccountIdentifier"`
}
