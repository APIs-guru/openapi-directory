import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceFleetTypeEnum } from "./instancefleettypeenum";
import { InstanceGroupTypeEnum } from "./instancegrouptypeenum";
import { InstanceStateEnum } from "./instancestateenum";


// ListInstancesInput
/** 
 * This input determines which instances to list.
**/
export class ListInstancesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @Metadata({ data: "json, name=InstanceFleetId" })
  instanceFleetId?: string;

  @Metadata({ data: "json, name=InstanceFleetType" })
  instanceFleetType?: InstanceFleetTypeEnum;

  @Metadata({ data: "json, name=InstanceGroupId" })
  instanceGroupId?: string;

  @Metadata({ data: "json, name=InstanceGroupTypes" })
  instanceGroupTypes?: InstanceGroupTypeEnum[];

  @Metadata({ data: "json, name=InstanceStates" })
  instanceStates?: InstanceStateEnum[];

  @Metadata({ data: "json, name=Marker" })
  marker?: string;
}
