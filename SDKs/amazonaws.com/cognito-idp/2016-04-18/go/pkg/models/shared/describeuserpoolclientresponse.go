package shared

// DescribeUserPoolClientResponse
// Represents the response from the server from a request to describe the user pool client.
type DescribeUserPoolClientResponse struct {
	UserPoolClient *UserPoolClientType `json:"UserPoolClient,omitempty"`
}
