package shared

type LifecyclePolicy struct {
	TransitionToIa                  *TransitionToIaRulesEnum                  `json:"TransitionToIA"`
	TransitionToPrimaryStorageClass *TransitionToPrimaryStorageClassRulesEnum `json:"TransitionToPrimaryStorageClass"`
}
