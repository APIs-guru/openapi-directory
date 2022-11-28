import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceStatusEnum } from "./instancestatusenum";
import { InstanceTypeEnum } from "./instancetypeenum";



// ListDeploymentInstancesInput
/** 
 *  Represents the input of a <code>ListDeploymentInstances</code> operation. 
**/
export class ListDeploymentInstancesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId: string;

  @SpeakeasyMetadata({ data: "json, name=instanceStatusFilter" })
  instanceStatusFilter?: InstanceStatusEnum[];

  @SpeakeasyMetadata({ data: "json, name=instanceTypeFilter" })
  instanceTypeFilter?: InstanceTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
