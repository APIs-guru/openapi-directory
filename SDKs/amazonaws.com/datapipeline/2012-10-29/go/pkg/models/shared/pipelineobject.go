package shared

type PipelineObject struct {
	Fields []Field `json:"fields"`
	ID     string  `json:"id"`
	Name   string  `json:"name"`
}
