package shared

// MultipleRegionsException
// Your manifest file contained buckets from multiple regions. A job is restricted to buckets from one region. Please correct and resubmit.
type MultipleRegionsException struct {
	Message *string
}
