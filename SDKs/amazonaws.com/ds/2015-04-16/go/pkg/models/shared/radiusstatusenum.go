package shared

type RadiusStatusEnum string

const (
	RadiusStatusEnumCreating  RadiusStatusEnum = "Creating"
	RadiusStatusEnumCompleted RadiusStatusEnum = "Completed"
	RadiusStatusEnumFailed    RadiusStatusEnum = "Failed"
)
