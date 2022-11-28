package shared

// DescribeNetworkInterfaceAttributeResult
// Contains the output of DescribeNetworkInterfaceAttribute.
type DescribeNetworkInterfaceAttributeResult struct {
	Attachment         *NetworkInterfaceAttachment
	Description        *AttributeValue
	Groups             []GroupIdentifier
	NetworkInterfaceID *string
	SourceDestCheck    *AttributeBooleanValue
}
