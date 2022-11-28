package shared

type RouteOriginEnum string

const (
	RouteOriginEnumCreateRouteTable          RouteOriginEnum = "CreateRouteTable"
	RouteOriginEnumCreateRoute               RouteOriginEnum = "CreateRoute"
	RouteOriginEnumEnableVgwRoutePropagation RouteOriginEnum = "EnableVgwRoutePropagation"
)
