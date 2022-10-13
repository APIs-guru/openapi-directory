package shared

type DescribeTagsResponse struct {
	Marker     *string `json:"Marker"`
	NextMarker *string `json:"NextMarker"`
	Tags       []Tag   `json:"Tags"`
}
