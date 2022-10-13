package shared

type CreateProjectRequest struct {
	ClientRequestToken *string           `json:"clientRequestToken"`
	Description        *string           `json:"description"`
	ID                 string            `json:"id"`
	Name               string            `json:"name"`
	SourceCode         []Code            `json:"sourceCode"`
	Tags               map[string]string `json:"tags"`
	Toolchain          *Toolchain        `json:"toolchain"`
}
