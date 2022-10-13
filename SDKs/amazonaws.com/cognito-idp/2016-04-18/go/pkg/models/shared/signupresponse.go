package shared

type SignUpResponse struct {
	CodeDeliveryDetails *CodeDeliveryDetailsType `json:"CodeDeliveryDetails"`
	UserConfirmed       bool                     `json:"UserConfirmed"`
	UserSub             string                   `json:"UserSub"`
}
