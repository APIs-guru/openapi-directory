package shared

import (
	"time"
)

type IPRouteInfo struct {
	AddedDateTime       *time.Time            `json:"AddedDateTime,omitempty"`
	CidrIP              *string               `json:"CidrIp,omitempty"`
	Description         *string               `json:"Description,omitempty"`
	DirectoryID         *string               `json:"DirectoryId,omitempty"`
	IPRouteStatusMsg    *IPRouteStatusMsgEnum `json:"IpRouteStatusMsg,omitempty"`
	IPRouteStatusReason *string               `json:"IpRouteStatusReason,omitempty"`
}
