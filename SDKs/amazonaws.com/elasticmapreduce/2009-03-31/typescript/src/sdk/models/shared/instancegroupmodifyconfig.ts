import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Configuration } from "./configuration";
import { ShrinkPolicy } from "./shrinkpolicy";


// InstanceGroupModifyConfig
/** 
 * Modify the size or configurations of an instance group.
**/
export class InstanceGroupModifyConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Configurations", elemType: shared.Configuration })
  configurations?: Configuration[];

  @Metadata({ data: "json, name=EC2InstanceIdsToTerminate" })
  ec2InstanceIdsToTerminate?: string[];

  @Metadata({ data: "json, name=InstanceCount" })
  instanceCount?: number;

  @Metadata({ data: "json, name=InstanceGroupId" })
  instanceGroupId: string;

  @Metadata({ data: "json, name=ShrinkPolicy" })
  shrinkPolicy?: ShrinkPolicy;
}
