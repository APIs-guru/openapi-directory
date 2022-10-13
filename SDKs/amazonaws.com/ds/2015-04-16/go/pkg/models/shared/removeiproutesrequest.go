package shared

type RemoveIPRoutesRequest struct {
	CidrIps     []string `json:"CidrIps"`
	DirectoryID string   `json:"DirectoryId"`
}
