package shared

// ClassicLinkInstance
// Describes a linked EC2-Classic instance.
type ClassicLinkInstance struct {
	Groups     []GroupIdentifier
	InstanceID *string
	Tags       []Tag
	VpcID      *string
}
