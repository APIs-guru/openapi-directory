import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Configuration } from "./configuration";
import { ShrinkPolicy } from "./shrinkpolicy";



// InstanceGroupModifyConfig
/** 
 * Modify the size or configurations of an instance group.
**/
export class InstanceGroupModifyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Configurations", elemType: Configuration })
  configurations?: Configuration[];

  @SpeakeasyMetadata({ data: "json, name=EC2InstanceIdsToTerminate" })
  ec2InstanceIdsToTerminate?: string[];

  @SpeakeasyMetadata({ data: "json, name=InstanceCount" })
  instanceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=InstanceGroupId" })
  instanceGroupId: string;

  @SpeakeasyMetadata({ data: "json, name=ShrinkPolicy" })
  shrinkPolicy?: ShrinkPolicy;
}
