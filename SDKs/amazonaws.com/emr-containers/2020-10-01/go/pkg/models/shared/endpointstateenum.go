package shared

type EndpointStateEnum string

const (
	EndpointStateEnumCreating             EndpointStateEnum = "CREATING"
	EndpointStateEnumActive               EndpointStateEnum = "ACTIVE"
	EndpointStateEnumTerminating          EndpointStateEnum = "TERMINATING"
	EndpointStateEnumTerminated           EndpointStateEnum = "TERMINATED"
	EndpointStateEnumTerminatedWithErrors EndpointStateEnum = "TERMINATED_WITH_ERRORS"
)
