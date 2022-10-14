package shared

type DescribeCodeCoveragesOutput struct {
	CodeCoverages []CodeCoverage `json:"codeCoverages,omitempty"`
	NextToken     *string        `json:"nextToken,omitempty"`
}
