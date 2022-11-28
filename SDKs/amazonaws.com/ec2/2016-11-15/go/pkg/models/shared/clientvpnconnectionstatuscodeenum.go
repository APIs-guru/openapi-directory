package shared

type ClientVpnConnectionStatusCodeEnum string

const (
	ClientVpnConnectionStatusCodeEnumActive            ClientVpnConnectionStatusCodeEnum = "active"
	ClientVpnConnectionStatusCodeEnumFailedToTerminate ClientVpnConnectionStatusCodeEnum = "failed-to-terminate"
	ClientVpnConnectionStatusCodeEnumTerminating       ClientVpnConnectionStatusCodeEnum = "terminating"
	ClientVpnConnectionStatusCodeEnumTerminated        ClientVpnConnectionStatusCodeEnum = "terminated"
)
