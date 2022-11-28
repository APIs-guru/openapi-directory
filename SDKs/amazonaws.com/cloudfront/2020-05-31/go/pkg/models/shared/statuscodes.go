package shared

// StatusCodes
// A complex data type for the status codes that you specify that, when returned by a primary origin, trigger CloudFront to failover to a second origin.
type StatusCodes struct {
	Items    []int64
	Quantity int64
}
