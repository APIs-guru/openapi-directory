package shared

type DescribeAddonVersionsResponse struct {
	Addons    []AddonInfo `json:"addons"`
	NextToken *string     `json:"nextToken"`
}
