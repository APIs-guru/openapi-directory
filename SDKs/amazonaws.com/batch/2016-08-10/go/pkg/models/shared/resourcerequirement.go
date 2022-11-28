package shared

// ResourceRequirement
// The type and amount of a resource to assign to a container. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.
type ResourceRequirement struct {
	Type  ResourceTypeEnum `json:"type"`
	Value string           `json:"value"`
}
