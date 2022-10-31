package shared

type RegisterJobDefinitionResponse struct {
	JobDefinitionArn  string `json:"jobDefinitionArn"`
	JobDefinitionName string `json:"jobDefinitionName"`
	Revision          int64  `json:"revision"`
}
