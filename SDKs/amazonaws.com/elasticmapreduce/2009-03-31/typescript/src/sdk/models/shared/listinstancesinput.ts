import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceFleetTypeEnum } from "./instancefleettypeenum";
import { InstanceGroupTypeEnum } from "./instancegrouptypeenum";
import { InstanceStateEnum } from "./instancestateenum";



// ListInstancesInput
/** 
 * This input determines which instances to list.
**/
export class ListInstancesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceFleetId" })
  instanceFleetId?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceFleetType" })
  instanceFleetType?: InstanceFleetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=InstanceGroupId" })
  instanceGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceGroupTypes" })
  instanceGroupTypes?: InstanceGroupTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=InstanceStates" })
  instanceStates?: InstanceStateEnum[];

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;
}
