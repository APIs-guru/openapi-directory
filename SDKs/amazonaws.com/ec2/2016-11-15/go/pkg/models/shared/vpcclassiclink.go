package shared

// VpcClassicLink
// Describes whether a VPC is enabled for ClassicLink.
type VpcClassicLink struct {
	ClassicLinkEnabled *bool
	Tags               []Tag
	VpcID              *string
}
