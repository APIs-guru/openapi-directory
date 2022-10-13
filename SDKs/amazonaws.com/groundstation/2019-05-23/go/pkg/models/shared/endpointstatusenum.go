package shared

type EndpointStatusEnum string

const (
	EndpointStatusEnumCreated  EndpointStatusEnum = "created"
	EndpointStatusEnumCreating EndpointStatusEnum = "creating"
	EndpointStatusEnumDeleted  EndpointStatusEnum = "deleted"
	EndpointStatusEnumDeleting EndpointStatusEnum = "deleting"
	EndpointStatusEnumFailed   EndpointStatusEnum = "failed"
)
