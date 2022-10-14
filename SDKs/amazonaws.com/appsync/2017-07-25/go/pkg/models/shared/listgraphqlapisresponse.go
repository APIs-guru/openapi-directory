package shared

type ListGraphqlApisResponse struct {
	GraphqlApis []GraphqlAPI `json:"graphqlApis,omitempty"`
	NextToken   *string      `json:"nextToken,omitempty"`
}
