package shared

type UntagProjectRequest struct {
	ID   string   `json:"id"`
	Tags []string `json:"tags"`
}
