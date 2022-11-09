import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceFleetTypeEnum } from "./instancefleettypeenum";
import { InstanceTypeConfig } from "./instancetypeconfig";
import { InstanceFleetProvisioningSpecifications } from "./instancefleetprovisioningspecifications";


// InstanceFleetConfig
/** 
 * <p>The configuration that defines an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
**/
export class InstanceFleetConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceFleetType" })
  instanceFleetType: InstanceFleetTypeEnum;

  @Metadata({ data: "json, name=InstanceTypeConfigs", elemType: shared.InstanceTypeConfig })
  instanceTypeConfigs?: InstanceTypeConfig[];

  @Metadata({ data: "json, name=LaunchSpecifications" })
  launchSpecifications?: InstanceFleetProvisioningSpecifications;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=TargetOnDemandCapacity" })
  targetOnDemandCapacity?: number;

  @Metadata({ data: "json, name=TargetSpotCapacity" })
  targetSpotCapacity?: number;
}
