package shared

// Latency
// Represents the average latency for the slowest X percent of requests over the last 10 seconds.
type Latency struct {
	P10  *float64
	P50  *float64
	P75  *float64
	P85  *float64
	P90  *float64
	P95  *float64
	P99  *float64
	P999 *float64
}
