package shared

type CreateTaskSetRequest struct {
	CapacityProviderStrategy []CapacityProviderStrategyItem `json:"capacityProviderStrategy,omitempty"`
	ClientToken              *string                        `json:"clientToken,omitempty"`
	Cluster                  string                         `json:"cluster"`
	ExternalID               *string                        `json:"externalId,omitempty"`
	LaunchType               *LaunchTypeEnum                `json:"launchType,omitempty"`
	LoadBalancers            []LoadBalancer                 `json:"loadBalancers,omitempty"`
	NetworkConfiguration     *NetworkConfiguration          `json:"networkConfiguration,omitempty"`
	PlatformVersion          *string                        `json:"platformVersion,omitempty"`
	Scale                    *Scale                         `json:"scale,omitempty"`
	Service                  string                         `json:"service"`
	ServiceRegistries        []ServiceRegistry              `json:"serviceRegistries,omitempty"`
	Tags                     []Tag                          `json:"tags,omitempty"`
	TaskDefinition           string                         `json:"taskDefinition"`
}
