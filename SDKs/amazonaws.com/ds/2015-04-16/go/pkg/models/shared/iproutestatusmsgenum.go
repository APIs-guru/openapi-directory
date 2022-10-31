package shared




type IPRouteStatusMsgEnum string

const (
    IPRouteStatusMsgEnumAdding IPRouteStatusMsgEnum = "Adding"
IPRouteStatusMsgEnumAdded IPRouteStatusMsgEnum = "Added"
IPRouteStatusMsgEnumRemoving IPRouteStatusMsgEnum = "Removing"
IPRouteStatusMsgEnumRemoved IPRouteStatusMsgEnum = "Removed"
IPRouteStatusMsgEnumAddFailed IPRouteStatusMsgEnum = "AddFailed"
IPRouteStatusMsgEnumRemoveFailed IPRouteStatusMsgEnum = "RemoveFailed"
)


