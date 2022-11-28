package shared

// PipelineObject
// Contains information about a pipeline object. This can be a logical, physical, or physical attempt pipeline object. The complete set of components of a pipeline defines the pipeline.
type PipelineObject struct {
	Fields []Field `json:"fields"`
	ID     string  `json:"id"`
	Name   string  `json:"name"`
}
