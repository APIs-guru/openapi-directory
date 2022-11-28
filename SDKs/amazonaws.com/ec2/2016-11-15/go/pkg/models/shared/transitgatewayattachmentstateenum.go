package shared

type TransitGatewayAttachmentStateEnum string

const (
	TransitGatewayAttachmentStateEnumInitiating        TransitGatewayAttachmentStateEnum = "initiating"
	TransitGatewayAttachmentStateEnumInitiatingRequest TransitGatewayAttachmentStateEnum = "initiatingRequest"
	TransitGatewayAttachmentStateEnumPendingAcceptance TransitGatewayAttachmentStateEnum = "pendingAcceptance"
	TransitGatewayAttachmentStateEnumRollingBack       TransitGatewayAttachmentStateEnum = "rollingBack"
	TransitGatewayAttachmentStateEnumPending           TransitGatewayAttachmentStateEnum = "pending"
	TransitGatewayAttachmentStateEnumAvailable         TransitGatewayAttachmentStateEnum = "available"
	TransitGatewayAttachmentStateEnumModifying         TransitGatewayAttachmentStateEnum = "modifying"
	TransitGatewayAttachmentStateEnumDeleting          TransitGatewayAttachmentStateEnum = "deleting"
	TransitGatewayAttachmentStateEnumDeleted           TransitGatewayAttachmentStateEnum = "deleted"
	TransitGatewayAttachmentStateEnumFailed            TransitGatewayAttachmentStateEnum = "failed"
	TransitGatewayAttachmentStateEnumRejected          TransitGatewayAttachmentStateEnum = "rejected"
	TransitGatewayAttachmentStateEnumRejecting         TransitGatewayAttachmentStateEnum = "rejecting"
	TransitGatewayAttachmentStateEnumFailing           TransitGatewayAttachmentStateEnum = "failing"
)
