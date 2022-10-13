package shared

type CreateTaskSetRequest struct {
	CapacityProviderStrategy []CapacityProviderStrategyItem `json:"capacityProviderStrategy"`
	ClientToken              *string                        `json:"clientToken"`
	Cluster                  string                         `json:"cluster"`
	ExternalID               *string                        `json:"externalId"`
	LaunchType               *LaunchTypeEnum                `json:"launchType"`
	LoadBalancers            []LoadBalancer                 `json:"loadBalancers"`
	NetworkConfiguration     *NetworkConfiguration          `json:"networkConfiguration"`
	PlatformVersion          *string                        `json:"platformVersion"`
	Scale                    *Scale                         `json:"scale"`
	Service                  string                         `json:"service"`
	ServiceRegistries        []ServiceRegistry              `json:"serviceRegistries"`
	Tags                     []Tag                          `json:"tags"`
	TaskDefinition           string                         `json:"taskDefinition"`
}
