package shared

type ListServicesResponse struct {
	NextToken   *string  `json:"nextToken"`
	ServiceArns []string `json:"serviceArns"`
}
