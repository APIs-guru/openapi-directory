package shared

type CreateProjectResult struct {
	Arn                string  `json:"arn"`
	ClientRequestToken *string `json:"clientRequestToken"`
	ID                 string  `json:"id"`
	ProjectTemplateID  *string `json:"projectTemplateId"`
}
