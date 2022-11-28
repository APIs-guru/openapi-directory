package shared

// CharacterOffsets
// For characters that were detected as issues, where they occur in the transcript.
type CharacterOffsets struct {
	BeginOffsetChar int64 `json:"BeginOffsetChar"`
	EndOffsetChar   int64 `json:"EndOffsetChar"`
}
