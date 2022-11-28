package shared

// DescribeAnalysisSchemesResponse
// The result of a <code>DescribeAnalysisSchemes</code> request. Contains the analysis schemes configured for the domain specified in the request.
type DescribeAnalysisSchemesResponse struct {
	AnalysisSchemes []AnalysisSchemeStatus
}
