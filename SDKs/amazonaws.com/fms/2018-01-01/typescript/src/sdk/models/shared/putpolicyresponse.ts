import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Policy } from "./policy";


export class PutPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Policy" })
  policy?: Policy;

  @Metadata({ data: "json, name=PolicyArn" })
  policyArn?: string;
}
