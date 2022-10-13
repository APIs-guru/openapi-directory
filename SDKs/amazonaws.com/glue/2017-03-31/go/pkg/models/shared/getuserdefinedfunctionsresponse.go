package shared

type GetUserDefinedFunctionsResponse struct {
	NextToken            *string               `json:"NextToken"`
	UserDefinedFunctions []UserDefinedFunction `json:"UserDefinedFunctions"`
}
