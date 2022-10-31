package shared



type LifecyclePolicy struct {
    TransitionToIa *TransitionToIaRulesEnum `json:"TransitionToIA,omitempty"`
    TransitionToPrimaryStorageClass *TransitionToPrimaryStorageClassRulesEnum `json:"TransitionToPrimaryStorageClass,omitempty"`
    
}

