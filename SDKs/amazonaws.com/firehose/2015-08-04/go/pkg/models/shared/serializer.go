package shared

type Serializer struct {
	OrcSerDe     *OrcSerDe     `json:"OrcSerDe,omitempty"`
	ParquetSerDe *ParquetSerDe `json:"ParquetSerDe,omitempty"`
}
