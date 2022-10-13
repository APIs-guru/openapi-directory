package shared

type Loa struct {
	LoaContent     *string             `json:"loaContent"`
	LoaContentType *LoaContentTypeEnum `json:"loaContentType"`
}
