package shared

type DescribeCodeCoveragesOutput struct {
	CodeCoverages []CodeCoverage `json:"codeCoverages"`
	NextToken     *string        `json:"nextToken"`
}
