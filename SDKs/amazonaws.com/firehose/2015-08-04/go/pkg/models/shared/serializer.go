package shared

type Serializer struct {
	OrcSerDe     *OrcSerDe     `json:"OrcSerDe"`
	ParquetSerDe *ParquetSerDe `json:"ParquetSerDe"`
}
