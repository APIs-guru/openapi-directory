package shared

// Loa
// Information about a Letter of Authorization - Connecting Facility Assignment (LOA-CFA) for a connection.
type Loa struct {
	LoaContent     *string             `json:"loaContent,omitempty"`
	LoaContentType *LoaContentTypeEnum `json:"loaContentType,omitempty"`
}
