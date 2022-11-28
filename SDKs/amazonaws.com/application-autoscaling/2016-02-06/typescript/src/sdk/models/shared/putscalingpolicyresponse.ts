import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Alarm } from "./alarm";



export class PutScalingPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Alarms", elemType: Alarm })
  alarms?: Alarm[];

  @SpeakeasyMetadata({ data: "json, name=PolicyARN" })
  policyArn: string;
}
