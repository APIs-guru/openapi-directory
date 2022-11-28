import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceFleetTypeEnum } from "./instancefleettypeenum";
import { InstanceTypeConfig } from "./instancetypeconfig";
import { InstanceFleetProvisioningSpecifications } from "./instancefleetprovisioningspecifications";
/**
 * <p>The configuration that defines an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
**/
export declare class InstanceFleetConfig extends SpeakeasyBase {
    instanceFleetType: InstanceFleetTypeEnum;
    instanceTypeConfigs?: InstanceTypeConfig[];
    launchSpecifications?: InstanceFleetProvisioningSpecifications;
    name?: string;
    targetOnDemandCapacity?: number;
    targetSpotCapacity?: number;
}
