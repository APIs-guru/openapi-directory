package shared

// EventInformation
// Describes an EC2 Fleet or Spot Fleet event.
type EventInformation struct {
	EventDescription *string
	EventSubType     *string
	InstanceID       *string
}
