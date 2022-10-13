package shared

type VpcLinkStatusEnum string

const (
	VpcLinkStatusEnumPending   VpcLinkStatusEnum = "PENDING"
	VpcLinkStatusEnumAvailable VpcLinkStatusEnum = "AVAILABLE"
	VpcLinkStatusEnumDeleting  VpcLinkStatusEnum = "DELETING"
	VpcLinkStatusEnumFailed    VpcLinkStatusEnum = "FAILED"
	VpcLinkStatusEnumInactive  VpcLinkStatusEnum = "INACTIVE"
)
