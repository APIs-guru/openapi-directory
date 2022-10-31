package shared



type CopyCommand struct {
    CopyOptions *string `json:"CopyOptions,omitempty"`
    DataTableColumns *string `json:"DataTableColumns,omitempty"`
    DataTableName string `json:"DataTableName"`
    
}

