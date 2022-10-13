package shared

type CreateUserPoolDomainRequest struct {
	CustomDomainConfig *CustomDomainConfigType `json:"CustomDomainConfig"`
	Domain             string                  `json:"Domain"`
	UserPoolID         string                  `json:"UserPoolId"`
}
