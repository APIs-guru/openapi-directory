package shared

type VpcPeeringConnectionStateReasonCodeEnum string

const (
	VpcPeeringConnectionStateReasonCodeEnumInitiatingRequest VpcPeeringConnectionStateReasonCodeEnum = "initiating-request"
	VpcPeeringConnectionStateReasonCodeEnumPendingAcceptance VpcPeeringConnectionStateReasonCodeEnum = "pending-acceptance"
	VpcPeeringConnectionStateReasonCodeEnumActive            VpcPeeringConnectionStateReasonCodeEnum = "active"
	VpcPeeringConnectionStateReasonCodeEnumDeleted           VpcPeeringConnectionStateReasonCodeEnum = "deleted"
	VpcPeeringConnectionStateReasonCodeEnumRejected          VpcPeeringConnectionStateReasonCodeEnum = "rejected"
	VpcPeeringConnectionStateReasonCodeEnumFailed            VpcPeeringConnectionStateReasonCodeEnum = "failed"
	VpcPeeringConnectionStateReasonCodeEnumExpired           VpcPeeringConnectionStateReasonCodeEnum = "expired"
	VpcPeeringConnectionStateReasonCodeEnumProvisioning      VpcPeeringConnectionStateReasonCodeEnum = "provisioning"
	VpcPeeringConnectionStateReasonCodeEnumDeleting          VpcPeeringConnectionStateReasonCodeEnum = "deleting"
)
