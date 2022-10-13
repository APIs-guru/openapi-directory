package shared

type TagResourceRequest struct {
	ResourceName string `json:"ResourceName"`
	Tags         []Tag  `json:"Tags"`
}
