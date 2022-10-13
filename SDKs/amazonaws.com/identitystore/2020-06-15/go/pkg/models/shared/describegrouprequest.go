package shared

type DescribeGroupRequest struct {
	GroupID         string `json:"GroupId"`
	IdentityStoreID string `json:"IdentityStoreId"`
}
