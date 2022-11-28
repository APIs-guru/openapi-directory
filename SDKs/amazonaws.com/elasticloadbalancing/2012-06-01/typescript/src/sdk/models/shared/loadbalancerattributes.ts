import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessLog } from "./accesslog";
import { AdditionalAttribute } from "./additionalattribute";
import { ConnectionDraining } from "./connectiondraining";
import { ConnectionSettings } from "./connectionsettings";
import { CrossZoneLoadBalancing } from "./crosszoneloadbalancing";



// LoadBalancerAttributes
/** 
 * The attributes for a load balancer.
**/
export class LoadBalancerAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessLog?: AccessLog;

  @SpeakeasyMetadata({ elemType: AdditionalAttribute })
  additionalAttributes?: AdditionalAttribute[];

  @SpeakeasyMetadata()
  connectionDraining?: ConnectionDraining;

  @SpeakeasyMetadata()
  connectionSettings?: ConnectionSettings;

  @SpeakeasyMetadata()
  crossZoneLoadBalancing?: CrossZoneLoadBalancing;
}
