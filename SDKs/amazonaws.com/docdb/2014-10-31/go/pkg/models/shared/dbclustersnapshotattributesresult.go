package shared

// DbClusterSnapshotAttributesResult
// Detailed information about the attributes that are associated with a cluster snapshot.
type DbClusterSnapshotAttributesResult struct {
	DbClusterSnapshotAttributes []DbClusterSnapshotAttribute
	DbClusterSnapshotIdentifier *string
}
