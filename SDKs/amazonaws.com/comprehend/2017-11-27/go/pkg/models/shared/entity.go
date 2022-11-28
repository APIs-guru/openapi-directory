package shared

// Entity
// <p>Provides information about an entity. </p> <p> </p>
type Entity struct {
	BeginOffset *int64          `json:"BeginOffset,omitempty"`
	EndOffset   *int64          `json:"EndOffset,omitempty"`
	Score       *float32        `json:"Score,omitempty"`
	Text        *string         `json:"Text,omitempty"`
	Type        *EntityTypeEnum `json:"Type,omitempty"`
}
