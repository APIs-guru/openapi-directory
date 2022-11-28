package shared

import (
	"time"
)

// IPRouteInfo
// Information about one or more IP address blocks.
type IPRouteInfo struct {
	AddedDateTime       *time.Time            `json:"AddedDateTime,omitempty"`
	CidrIP              *string               `json:"CidrIp,omitempty"`
	Description         *string               `json:"Description,omitempty"`
	DirectoryID         *string               `json:"DirectoryId,omitempty"`
	IPRouteStatusMsg    *IPRouteStatusMsgEnum `json:"IpRouteStatusMsg,omitempty"`
	IPRouteStatusReason *string               `json:"IpRouteStatusReason,omitempty"`
}
