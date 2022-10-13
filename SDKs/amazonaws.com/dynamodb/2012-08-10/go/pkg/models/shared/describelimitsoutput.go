package shared

type DescribeLimitsOutput struct {
	AccountMaxReadCapacityUnits  *int64 `json:"AccountMaxReadCapacityUnits"`
	AccountMaxWriteCapacityUnits *int64 `json:"AccountMaxWriteCapacityUnits"`
	TableMaxReadCapacityUnits    *int64 `json:"TableMaxReadCapacityUnits"`
	TableMaxWriteCapacityUnits   *int64 `json:"TableMaxWriteCapacityUnits"`
}
