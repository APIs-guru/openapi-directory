package shared

// LocationFilter
// You can use API filters to narrow down the list of resources returned by <code>ListLocations</code>. For example, to retrieve all your Amazon S3 locations, you can use <code>ListLocations</code> with filter name <code>LocationType S3</code> and <code>Operator Equals</code>.
type LocationFilter struct {
	Name     LocationFilterNameEnum `json:"Name"`
	Operator OperatorEnum           `json:"Operator"`
	Values   []string               `json:"Values"`
}
