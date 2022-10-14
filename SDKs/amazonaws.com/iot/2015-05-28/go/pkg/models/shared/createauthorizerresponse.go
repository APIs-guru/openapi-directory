package shared

type CreateAuthorizerResponse struct {
	AuthorizerArn  *string `json:"authorizerArn,omitempty"`
	AuthorizerName *string `json:"authorizerName,omitempty"`
}
