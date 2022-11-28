package shared

// Segment
// Defines a non-overlapping region of a table's partitions, allowing multiple requests to be run in parallel.
type Segment struct {
	SegmentNumber int64 `json:"SegmentNumber"`
	TotalSegments int64 `json:"TotalSegments"`
}
