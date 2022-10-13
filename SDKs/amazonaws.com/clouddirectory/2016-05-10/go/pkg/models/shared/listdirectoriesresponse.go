package shared

type ListDirectoriesResponse struct {
	Directories []Directory `json:"Directories"`
	NextToken   *string     `json:"NextToken"`
}
