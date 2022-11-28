package shared

// DeleteConditionalForwarderRequest
// Deletes a conditional forwarder.
type DeleteConditionalForwarderRequest struct {
	DirectoryID      string `json:"DirectoryId"`
	RemoteDomainName string `json:"RemoteDomainName"`
}
