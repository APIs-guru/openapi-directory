package shared

type GetProfileObjectTypeTemplateResponse struct {
	AllowProfileCreation *bool                      `json:"AllowProfileCreation,omitempty"`
	Fields               map[string]ObjectTypeField `json:"Fields,omitempty"`
	Keys                 map[string][]ObjectTypeKey `json:"Keys,omitempty"`
	SourceName           *string                    `json:"SourceName,omitempty"`
	SourceObject         *string                    `json:"SourceObject,omitempty"`
	TemplateID           *string                    `json:"TemplateId,omitempty"`
}
