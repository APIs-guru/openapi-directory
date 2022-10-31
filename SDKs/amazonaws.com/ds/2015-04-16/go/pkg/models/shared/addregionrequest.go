package shared

type AddRegionRequest struct {
	DirectoryID string               `json:"DirectoryId"`
	RegionName  string               `json:"RegionName"`
	VpcSettings DirectoryVpcSettings `json:"VPCSettings"`
}
