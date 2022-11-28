import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingInstanceDetails } from "./autoscalinginstancedetails";



export class AutoScalingInstancesType extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AutoScalingInstanceDetails })
  autoScalingInstances?: AutoScalingInstanceDetails[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
