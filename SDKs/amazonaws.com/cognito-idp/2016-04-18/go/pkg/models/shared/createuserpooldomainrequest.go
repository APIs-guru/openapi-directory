package shared

type CreateUserPoolDomainRequest struct {
	CustomDomainConfig *CustomDomainConfigType `json:"CustomDomainConfig,omitempty"`
	Domain             string                  `json:"Domain"`
	UserPoolID         string                  `json:"UserPoolId"`
}
