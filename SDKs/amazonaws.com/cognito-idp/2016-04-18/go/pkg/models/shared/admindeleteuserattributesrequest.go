package shared

type AdminDeleteUserAttributesRequest struct {
	UserAttributeNames []string `json:"UserAttributeNames"`
	UserPoolID         string   `json:"UserPoolId"`
	Username           string   `json:"Username"`
}
