package shared



type DescribeExportTasksResponse struct {
    ExportsInfo []ExportInfo `json:"exportsInfo,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

