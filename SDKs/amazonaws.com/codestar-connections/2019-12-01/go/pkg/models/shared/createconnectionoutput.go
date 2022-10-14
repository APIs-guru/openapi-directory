package shared

type CreateConnectionOutput struct {
	ConnectionArn string `json:"ConnectionArn"`
	Tags          []Tag  `json:"Tags,omitempty"`
}
