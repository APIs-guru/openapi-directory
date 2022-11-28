package shared

// TestResult
// Contains the result of testing a CloudFront function with <code>TestFunction</code>.
type TestResult struct {
	ComputeUtilization    *string
	FunctionErrorMessage  *string
	FunctionExecutionLogs []string
	FunctionOutput        *string
	FunctionSummary       *FunctionSummary
}
