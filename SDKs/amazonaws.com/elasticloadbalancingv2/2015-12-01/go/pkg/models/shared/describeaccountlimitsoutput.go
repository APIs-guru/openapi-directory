package shared

type DescribeAccountLimitsOutput struct {
	Limits     []Limit
	NextMarker *string
}
