import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Alarm } from "./alarm";



// PolicyArnType
/** 
 * Contains the output of PutScalingPolicy.
**/
export class PolicyArnType extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Alarm })
  alarms?: Alarm[];

  @SpeakeasyMetadata()
  policyArn?: string;
}
