package shared

type AddIPRoutesRequest struct {
	DirectoryID                                string    `json:"DirectoryId"`
	IPRoutes                                   []IPRoute `json:"IpRoutes"`
	UpdateSecurityGroupForDirectoryControllers *bool     `json:"UpdateSecurityGroupForDirectoryControllers,omitempty"`
}
