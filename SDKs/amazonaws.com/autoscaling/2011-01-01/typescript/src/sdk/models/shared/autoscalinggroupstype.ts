import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingGroup } from "./autoscalinggroup";



export class AutoScalingGroupsType extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AutoScalingGroup })
  autoScalingGroups: AutoScalingGroup[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
