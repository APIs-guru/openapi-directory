package shared

type DescribeAddonVersionsResponse struct {
	Addons    []AddonInfo `json:"addons,omitempty"`
	NextToken *string     `json:"nextToken,omitempty"`
}
