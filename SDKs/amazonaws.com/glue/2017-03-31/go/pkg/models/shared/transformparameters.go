package shared

type TransformParameters struct {
	FindMatchesParameters *FindMatchesParameters `json:"FindMatchesParameters"`
	TransformType         TransformTypeEnum      `json:"TransformType"`
}
