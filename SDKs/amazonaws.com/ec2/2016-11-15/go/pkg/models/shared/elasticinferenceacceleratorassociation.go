package shared

import (
	"time"
)

// ElasticInferenceAcceleratorAssociation
//
//	Describes the association between an instance and an elastic inference accelerator.
type ElasticInferenceAcceleratorAssociation struct {
	ElasticInferenceAcceleratorArn              *string
	ElasticInferenceAcceleratorAssociationID    *string
	ElasticInferenceAcceleratorAssociationState *string
	ElasticInferenceAcceleratorAssociationTime  *time.Time
}
