package shared

type RouteStatusCodeEnum string

const (
	RouteStatusCodeEnumActive   RouteStatusCodeEnum = "ACTIVE"
	RouteStatusCodeEnumInactive RouteStatusCodeEnum = "INACTIVE"
	RouteStatusCodeEnumDeleted  RouteStatusCodeEnum = "DELETED"
)
