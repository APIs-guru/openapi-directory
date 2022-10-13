package shared

type CreatePortalResponse struct {
	PortalArn        string       `json:"portalArn"`
	PortalID         string       `json:"portalId"`
	PortalStartURL   string       `json:"portalStartUrl"`
	PortalStatus     PortalStatus `json:"portalStatus"`
	SsoApplicationID string       `json:"ssoApplicationId"`
}
