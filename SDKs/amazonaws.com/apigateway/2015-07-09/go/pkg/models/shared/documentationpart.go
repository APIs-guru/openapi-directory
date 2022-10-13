package shared

type DocumentationPart struct {
	ID         *string                    `json:"id"`
	Location   *DocumentationPartLocation `json:"location"`
	Properties *interface{}               `json:"properties"`
}
