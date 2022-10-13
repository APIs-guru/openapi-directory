package shared

type PolicyDetails struct {
	Actions           []Action                     `json:"Actions"`
	EventSource       *EventSource                 `json:"EventSource"`
	Parameters        *Parameters                  `json:"Parameters"`
	PolicyType        *PolicyTypeValuesEnum        `json:"PolicyType"`
	ResourceLocations []ResourceLocationValuesEnum `json:"ResourceLocations"`
	ResourceTypes     []ResourceTypeValuesEnum     `json:"ResourceTypes"`
	Schedules         []Schedule                   `json:"Schedules"`
	TargetTags        []Tag                        `json:"TargetTags"`
}
