package shared

type ClientVpnRouteStatusCodeEnum string

const (
	ClientVpnRouteStatusCodeEnumCreating ClientVpnRouteStatusCodeEnum = "creating"
	ClientVpnRouteStatusCodeEnumActive   ClientVpnRouteStatusCodeEnum = "active"
	ClientVpnRouteStatusCodeEnumFailed   ClientVpnRouteStatusCodeEnum = "failed"
	ClientVpnRouteStatusCodeEnumDeleting ClientVpnRouteStatusCodeEnum = "deleting"
)
