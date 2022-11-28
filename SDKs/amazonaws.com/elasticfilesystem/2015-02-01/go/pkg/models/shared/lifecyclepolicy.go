package shared

// LifecyclePolicy
// Describes a policy used by EFS lifecycle management to transition files to the Infrequent Access (IA) storage class.
type LifecyclePolicy struct {
	TransitionToIa                  *TransitionToIaRulesEnum                  `json:"TransitionToIA,omitempty"`
	TransitionToPrimaryStorageClass *TransitionToPrimaryStorageClassRulesEnum `json:"TransitionToPrimaryStorageClass,omitempty"`
}
