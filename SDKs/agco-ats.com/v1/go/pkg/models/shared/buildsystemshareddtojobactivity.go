package shared

// BuildSystemSharedDtoJobActivity
// A DTO for an IJobActivity
type BuildSystemSharedDtoJobActivity struct {
	ActivityID        *int32                                 `json:"ActivityID,omitempty"`
	JobActivityID     *int32                                 `json:"JobActivityID,omitempty"`
	JobID             *int32                                 `json:"JobID,omitempty"`
	ParameterMappings []BuildSystemSharedDtoParameterMapping `json:"ParameterMappings,omitempty"`
	RunOrder          *int32                                 `json:"RunOrder,omitempty"`
}
