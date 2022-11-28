package shared

// ElasticGpuAssociation
// Describes the association between an instance and an Elastic Graphics accelerator.
type ElasticGpuAssociation struct {
	ElasticGpuAssociationID    *string
	ElasticGpuAssociationState *string
	ElasticGpuAssociationTime  *string
	ElasticGpuID               *string
}
