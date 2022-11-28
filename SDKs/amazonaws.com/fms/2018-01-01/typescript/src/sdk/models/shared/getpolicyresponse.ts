import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";



export class GetPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy?: Policy;

  @SpeakeasyMetadata({ data: "json, name=PolicyArn" })
  policyArn?: string;
}
