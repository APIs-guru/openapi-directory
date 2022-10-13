package shared

type GetProfileObjectTypeTemplateResponse struct {
	AllowProfileCreation *bool                      `json:"AllowProfileCreation"`
	Fields               map[string]ObjectTypeField `json:"Fields"`
	Keys                 map[string][]ObjectTypeKey `json:"Keys"`
	SourceName           *string                    `json:"SourceName"`
	SourceObject         *string                    `json:"SourceObject"`
	TemplateID           *string                    `json:"TemplateId"`
}
