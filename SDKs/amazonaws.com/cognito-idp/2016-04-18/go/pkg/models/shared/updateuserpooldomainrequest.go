package shared

type UpdateUserPoolDomainRequest struct {
	CustomDomainConfig CustomDomainConfigType `json:"CustomDomainConfig"`
	Domain             string                 `json:"Domain"`
	UserPoolID         string                 `json:"UserPoolId"`
}
