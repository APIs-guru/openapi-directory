package shared

type DescribeFleetsResult struct {
	Fleets    []FleetData
	NextToken *string
}
