package shared

type DeleteAttributesRequest struct {
	Attributes []Attribute `json:"attributes"`
	Cluster    *string     `json:"cluster,omitempty"`
}
