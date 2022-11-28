package shared

// InvalidationBatch
// An invalidation batch.
type InvalidationBatch struct {
	CallerReference string
	Paths           Paths
}
