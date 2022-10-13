package shared

type GetCredentialsForIdentityInput struct {
	CustomRoleArn *string           `json:"CustomRoleArn"`
	IdentityID    string            `json:"IdentityId"`
	Logins        map[string]string `json:"Logins"`
}
