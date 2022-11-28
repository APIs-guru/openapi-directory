package shared

import (
	"time"
)

// TransitGatewayRouteTable
// Describes a transit gateway route table.
type TransitGatewayRouteTable struct {
	CreationTime                 *time.Time
	DefaultAssociationRouteTable *bool
	DefaultPropagationRouteTable *bool
	State                        *TransitGatewayRouteTableStateEnum
	Tags                         []Tag
	TransitGatewayID             *string
	TransitGatewayRouteTableID   *string
}
