package shared

// AssociationStatus
// Describes the state of a target network association.
type AssociationStatus struct {
	Code    *AssociationStatusCodeEnum
	Message *string
}
