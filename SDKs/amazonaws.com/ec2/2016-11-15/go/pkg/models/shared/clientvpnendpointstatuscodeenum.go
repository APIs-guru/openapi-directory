package shared

type ClientVpnEndpointStatusCodeEnum string

const (
	ClientVpnEndpointStatusCodeEnumPendingAssociate ClientVpnEndpointStatusCodeEnum = "pending-associate"
	ClientVpnEndpointStatusCodeEnumAvailable        ClientVpnEndpointStatusCodeEnum = "available"
	ClientVpnEndpointStatusCodeEnumDeleting         ClientVpnEndpointStatusCodeEnum = "deleting"
	ClientVpnEndpointStatusCodeEnumDeleted          ClientVpnEndpointStatusCodeEnum = "deleted"
)
