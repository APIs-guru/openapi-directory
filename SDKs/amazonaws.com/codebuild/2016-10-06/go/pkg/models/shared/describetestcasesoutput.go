package shared

type DescribeTestCasesOutput struct {
	NextToken *string    `json:"nextToken"`
	TestCases []TestCase `json:"testCases"`
}
