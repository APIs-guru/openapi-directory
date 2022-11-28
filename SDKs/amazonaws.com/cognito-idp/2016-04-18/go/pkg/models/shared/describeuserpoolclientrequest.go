package shared

// DescribeUserPoolClientRequest
// Represents the request to describe a user pool client.
type DescribeUserPoolClientRequest struct {
	ClientID   string `json:"ClientId"`
	UserPoolID string `json:"UserPoolId"`
}
