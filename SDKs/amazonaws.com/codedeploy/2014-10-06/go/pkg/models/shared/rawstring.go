package shared

type RawString struct {
	Content *string `json:"content"`
	Sha256  *string `json:"sha256"`
}
