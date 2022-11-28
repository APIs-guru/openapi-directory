package shared

// DescribeConditionalForwardersRequest
// Describes a conditional forwarder.
type DescribeConditionalForwardersRequest struct {
	DirectoryID       string   `json:"DirectoryId"`
	RemoteDomainNames []string `json:"RemoteDomainNames,omitempty"`
}
