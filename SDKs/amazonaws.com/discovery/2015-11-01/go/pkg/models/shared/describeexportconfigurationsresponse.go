package shared

type DescribeExportConfigurationsResponse struct {
	ExportsInfo []ExportInfo `json:"exportsInfo,omitempty"`
	NextToken   *string      `json:"nextToken,omitempty"`
}
