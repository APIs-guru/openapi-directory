package shared

// ListUserPoolClientsResponse
// Represents the response from the server that lists user pool clients.
type ListUserPoolClientsResponse struct {
	NextToken       *string                     `json:"NextToken,omitempty"`
	UserPoolClients []UserPoolClientDescription `json:"UserPoolClients,omitempty"`
}
