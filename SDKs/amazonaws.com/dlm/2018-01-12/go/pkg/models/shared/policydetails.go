package shared

type PolicyDetails struct {
	Actions           []Action                     `json:"Actions,omitempty"`
	EventSource       *EventSource                 `json:"EventSource,omitempty"`
	Parameters        *Parameters                  `json:"Parameters,omitempty"`
	PolicyType        *PolicyTypeValuesEnum        `json:"PolicyType,omitempty"`
	ResourceLocations []ResourceLocationValuesEnum `json:"ResourceLocations,omitempty"`
	ResourceTypes     []ResourceTypeValuesEnum     `json:"ResourceTypes,omitempty"`
	Schedules         []Schedule                   `json:"Schedules,omitempty"`
	TargetTags        []Tag                        `json:"TargetTags,omitempty"`
}
