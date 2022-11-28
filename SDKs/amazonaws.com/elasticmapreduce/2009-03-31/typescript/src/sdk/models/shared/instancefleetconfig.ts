import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceFleetTypeEnum } from "./instancefleettypeenum";
import { InstanceTypeConfig } from "./instancetypeconfig";
import { InstanceFleetProvisioningSpecifications } from "./instancefleetprovisioningspecifications";



// InstanceFleetConfig
/** 
 * <p>The configuration that defines an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
**/
export class InstanceFleetConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceFleetType" })
  instanceFleetType: InstanceFleetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=InstanceTypeConfigs", elemType: InstanceTypeConfig })
  instanceTypeConfigs?: InstanceTypeConfig[];

  @SpeakeasyMetadata({ data: "json, name=LaunchSpecifications" })
  launchSpecifications?: InstanceFleetProvisioningSpecifications;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetOnDemandCapacity" })
  targetOnDemandCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=TargetSpotCapacity" })
  targetSpotCapacity?: number;
}
