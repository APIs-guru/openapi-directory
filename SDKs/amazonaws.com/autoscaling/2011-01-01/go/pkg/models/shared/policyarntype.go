package shared

// PolicyArnType
// Contains the output of PutScalingPolicy.
type PolicyArnType struct {
	Alarms    []Alarm
	PolicyArn *string
}
