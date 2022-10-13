package shared

import (
	"time"
)

type IPRouteInfo struct {
	AddedDateTime       *time.Time            `json:"AddedDateTime"`
	CidrIP              *string               `json:"CidrIp"`
	Description         *string               `json:"Description"`
	DirectoryID         *string               `json:"DirectoryId"`
	IPRouteStatusMsg    *IPRouteStatusMsgEnum `json:"IpRouteStatusMsg"`
	IPRouteStatusReason *string               `json:"IpRouteStatusReason"`
}
