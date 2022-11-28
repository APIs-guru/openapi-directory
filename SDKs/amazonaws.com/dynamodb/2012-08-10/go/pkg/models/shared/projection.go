package shared

// Projection
// Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
type Projection struct {
	NonKeyAttributes []string            `json:"NonKeyAttributes,omitempty"`
	ProjectionType   *ProjectionTypeEnum `json:"ProjectionType,omitempty"`
}
