package shared



type DescribeTestCasesOutput struct {
    NextToken *string `json:"nextToken,omitempty"`
    TestCases []TestCase `json:"testCases,omitempty"`
    
}

