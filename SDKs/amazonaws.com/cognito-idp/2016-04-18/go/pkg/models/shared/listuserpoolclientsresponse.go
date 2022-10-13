package shared

type ListUserPoolClientsResponse struct {
	NextToken       *string                     `json:"NextToken"`
	UserPoolClients []UserPoolClientDescription `json:"UserPoolClients"`
}
