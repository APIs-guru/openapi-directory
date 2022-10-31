package shared

type InstancesHealthAttributeEnum string

const (
	InstancesHealthAttributeEnumHealthStatus       InstancesHealthAttributeEnum = "HealthStatus"
	InstancesHealthAttributeEnumColor              InstancesHealthAttributeEnum = "Color"
	InstancesHealthAttributeEnumCauses             InstancesHealthAttributeEnum = "Causes"
	InstancesHealthAttributeEnumApplicationMetrics InstancesHealthAttributeEnum = "ApplicationMetrics"
	InstancesHealthAttributeEnumRefreshedAt        InstancesHealthAttributeEnum = "RefreshedAt"
	InstancesHealthAttributeEnumLaunchedAt         InstancesHealthAttributeEnum = "LaunchedAt"
	InstancesHealthAttributeEnumSystem             InstancesHealthAttributeEnum = "System"
	InstancesHealthAttributeEnumDeployment         InstancesHealthAttributeEnum = "Deployment"
	InstancesHealthAttributeEnumAvailabilityZone   InstancesHealthAttributeEnum = "AvailabilityZone"
	InstancesHealthAttributeEnumInstanceType       InstancesHealthAttributeEnum = "InstanceType"
	InstancesHealthAttributeEnumAll                InstancesHealthAttributeEnum = "All"
)
