package shared

type ObjectTypeField struct {
	ContentType *FieldContentTypeEnum `json:"ContentType"`
	Source      *string               `json:"Source"`
	Target      *string               `json:"Target"`
}
