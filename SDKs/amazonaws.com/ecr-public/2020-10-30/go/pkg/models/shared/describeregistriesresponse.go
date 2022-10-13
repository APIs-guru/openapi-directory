package shared

type DescribeRegistriesResponse struct {
	NextToken  *string    `json:"nextToken"`
	Registries []Registry `json:"registries"`
}
