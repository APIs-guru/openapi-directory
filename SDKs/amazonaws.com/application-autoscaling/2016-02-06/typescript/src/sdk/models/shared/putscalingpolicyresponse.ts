import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Alarm } from "./alarm";


export class PutScalingPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Alarms", elemType: shared.Alarm })
  alarms?: Alarm[];

  @Metadata({ data: "json, name=PolicyARN" })
  policyArn: string;
}
