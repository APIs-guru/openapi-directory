package shared

type PutAttributesRequest struct {
	Attributes []Attribute `json:"attributes"`
	Cluster    *string     `json:"cluster"`
}
