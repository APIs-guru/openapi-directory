package shared

type ListFunctionsResponse struct {
	Functions []FunctionConfiguration `json:"functions"`
	NextToken *string                 `json:"nextToken"`
}
