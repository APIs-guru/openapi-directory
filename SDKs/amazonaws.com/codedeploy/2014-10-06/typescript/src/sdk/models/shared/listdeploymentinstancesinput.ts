import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceStatusEnum } from "./instancestatusenum";
import { InstanceTypeEnum } from "./instancetypeenum";


// ListDeploymentInstancesInput
/** 
 *  Represents the input of a <code>ListDeploymentInstances</code> operation. 
**/
export class ListDeploymentInstancesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentId" })
  deploymentId: string;

  @Metadata({ data: "json, name=instanceStatusFilter" })
  instanceStatusFilter?: InstanceStatusEnum[];

  @Metadata({ data: "json, name=instanceTypeFilter" })
  instanceTypeFilter?: InstanceTypeEnum[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
