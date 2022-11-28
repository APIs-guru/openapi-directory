package shared

// DescribeLimitsOutput
// Represents the output of a <code>DescribeLimits</code> operation.
type DescribeLimitsOutput struct {
	AccountMaxReadCapacityUnits  *int64 `json:"AccountMaxReadCapacityUnits,omitempty"`
	AccountMaxWriteCapacityUnits *int64 `json:"AccountMaxWriteCapacityUnits,omitempty"`
	TableMaxReadCapacityUnits    *int64 `json:"TableMaxReadCapacityUnits,omitempty"`
	TableMaxWriteCapacityUnits   *int64 `json:"TableMaxWriteCapacityUnits,omitempty"`
}
