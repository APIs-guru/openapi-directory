package shared

type EndpointStatusEnum string

const (
	EndpointStatusEnumCreating  EndpointStatusEnum = "CREATING"
	EndpointStatusEnumDeleting  EndpointStatusEnum = "DELETING"
	EndpointStatusEnumFailed    EndpointStatusEnum = "FAILED"
	EndpointStatusEnumInService EndpointStatusEnum = "IN_SERVICE"
	EndpointStatusEnumUpdating  EndpointStatusEnum = "UPDATING"
)
