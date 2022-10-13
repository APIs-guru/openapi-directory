package shared

type CopyCommand struct {
	CopyOptions      *string `json:"CopyOptions"`
	DataTableColumns *string `json:"DataTableColumns"`
	DataTableName    string  `json:"DataTableName"`
}
