package shared

type DescribeExportConfigurationsResponse struct {
	ExportsInfo []ExportInfo `json:"exportsInfo"`
	NextToken   *string      `json:"nextToken"`
}
