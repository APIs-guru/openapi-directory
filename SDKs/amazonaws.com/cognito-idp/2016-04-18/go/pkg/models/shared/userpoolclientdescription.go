package shared

type UserPoolClientDescription struct {
	ClientID   *string `json:"ClientId"`
	ClientName *string `json:"ClientName"`
	UserPoolID *string `json:"UserPoolId"`
}
