package shared

type ListResolversResponse struct {
	NextToken *string    `json:"nextToken"`
	Resolvers []Resolver `json:"resolvers"`
}
