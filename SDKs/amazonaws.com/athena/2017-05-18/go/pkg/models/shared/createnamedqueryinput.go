package shared

type CreateNamedQueryInput struct {
	ClientRequestToken *string `json:"ClientRequestToken"`
	Database           string  `json:"Database"`
	Description        *string `json:"Description"`
	Name               string  `json:"Name"`
	QueryString        string  `json:"QueryString"`
	WorkGroup          *string `json:"WorkGroup"`
}
