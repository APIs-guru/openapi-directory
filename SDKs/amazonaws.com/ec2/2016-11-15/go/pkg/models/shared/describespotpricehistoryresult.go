package shared

// DescribeSpotPriceHistoryResult
// Contains the output of DescribeSpotPriceHistory.
type DescribeSpotPriceHistoryResult struct {
	NextToken        *string
	SpotPriceHistory []SpotPrice
}
