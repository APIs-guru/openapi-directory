import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpnConnectionOptions } from "./vpnconnectionoptions";
import { VpnStaticRoute } from "./vpnstaticroute";
import { VpnStateEnum } from "./vpnstateenum";
import { Tag } from "./tag";
import { GatewayTypeEnum } from "./gatewaytypeenum";
import { VgwTelemetry } from "./vgwtelemetry";



// VpnConnection
/** 
 * Describes a VPN connection.
**/
export class VpnConnection extends SpeakeasyBase {
  @SpeakeasyMetadata()
  category?: string;

  @SpeakeasyMetadata()
  customerGatewayConfiguration?: string;

  @SpeakeasyMetadata()
  customerGatewayId?: string;

  @SpeakeasyMetadata()
  options?: VpnConnectionOptions;

  @SpeakeasyMetadata({ elemType: VpnStaticRoute })
  routes?: VpnStaticRoute[];

  @SpeakeasyMetadata()
  state?: VpnStateEnum;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  transitGatewayId?: string;

  @SpeakeasyMetadata()
  type?: GatewayTypeEnum;

  @SpeakeasyMetadata({ elemType: VgwTelemetry })
  vgwTelemetry?: VgwTelemetry[];

  @SpeakeasyMetadata()
  vpnConnectionId?: string;

  @SpeakeasyMetadata()
  vpnGatewayId?: string;
}
