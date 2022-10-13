package shared

type BuildSystemSharedDtoJobActivity struct {
	ActivityID        *int32                                 `json:"ActivityID"`
	JobActivityID     *int32                                 `json:"JobActivityID"`
	JobID             *int32                                 `json:"JobID"`
	ParameterMappings []BuildSystemSharedDtoParameterMapping `json:"ParameterMappings"`
	RunOrder          *int32                                 `json:"RunOrder"`
}
