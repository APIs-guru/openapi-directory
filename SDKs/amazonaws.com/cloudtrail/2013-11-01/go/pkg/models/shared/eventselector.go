package shared

// EventSelector
// <p>Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.</p> <p>You can configure up to five event selectors for a trail.</p> <p>You cannot apply both event selectors and advanced event selectors to a trail.</p>
type EventSelector struct {
	DataResources                 []DataResource     `json:"DataResources,omitempty"`
	ExcludeManagementEventSources []string           `json:"ExcludeManagementEventSources,omitempty"`
	IncludeManagementEvents       *bool              `json:"IncludeManagementEvents,omitempty"`
	ReadWriteType                 *ReadWriteTypeEnum `json:"ReadWriteType,omitempty"`
}
