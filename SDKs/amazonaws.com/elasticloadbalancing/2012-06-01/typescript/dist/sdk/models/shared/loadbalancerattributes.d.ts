import { SpeakeasyBase } from "../../../internal/utils";
import { AccessLog } from "./accesslog";
import { AdditionalAttribute } from "./additionalattribute";
import { ConnectionDraining } from "./connectiondraining";
import { ConnectionSettings } from "./connectionsettings";
import { CrossZoneLoadBalancing } from "./crosszoneloadbalancing";
/**
 * The attributes for a load balancer.
**/
export declare class LoadBalancerAttributes extends SpeakeasyBase {
    accessLog?: AccessLog;
    additionalAttributes?: AdditionalAttribute[];
    connectionDraining?: ConnectionDraining;
    connectionSettings?: ConnectionSettings;
    crossZoneLoadBalancing?: CrossZoneLoadBalancing;
}
