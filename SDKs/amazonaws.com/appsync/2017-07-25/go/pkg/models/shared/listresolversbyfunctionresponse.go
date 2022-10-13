package shared

type ListResolversByFunctionResponse struct {
	NextToken *string    `json:"nextToken"`
	Resolvers []Resolver `json:"resolvers"`
}
