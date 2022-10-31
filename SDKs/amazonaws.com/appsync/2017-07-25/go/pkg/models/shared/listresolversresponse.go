package shared



type ListResolversResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    Resolvers []Resolver `json:"resolvers,omitempty"`
    
}

