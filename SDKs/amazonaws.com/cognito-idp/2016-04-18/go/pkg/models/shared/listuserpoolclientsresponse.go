package shared

type ListUserPoolClientsResponse struct {
	NextToken       *string                     `json:"NextToken,omitempty"`
	UserPoolClients []UserPoolClientDescription `json:"UserPoolClients,omitempty"`
}
