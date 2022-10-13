package shared

type ListGraphqlApisResponse struct {
	GraphqlApis []GraphqlAPI `json:"graphqlApis"`
	NextToken   *string      `json:"nextToken"`
}
