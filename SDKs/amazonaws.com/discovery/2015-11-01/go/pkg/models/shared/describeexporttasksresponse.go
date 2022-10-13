package shared

type DescribeExportTasksResponse struct {
	ExportsInfo []ExportInfo `json:"exportsInfo"`
	NextToken   *string      `json:"nextToken"`
}
