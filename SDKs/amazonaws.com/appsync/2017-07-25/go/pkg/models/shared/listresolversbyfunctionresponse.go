package shared



type ListResolversByFunctionResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    Resolvers []Resolver `json:"resolvers,omitempty"`
    
}

