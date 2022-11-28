package shared

// VirtualNodeStatus
// An object representing the current status of the virtual node.
type VirtualNodeStatus struct {
	Status *VirtualNodeStatusCodeEnum `json:"status,omitempty"`
}
