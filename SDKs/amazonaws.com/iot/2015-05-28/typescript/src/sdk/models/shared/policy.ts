import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Policy
/** 
 * Describes an IoT policy.
**/
export class Policy extends SpeakeasyBase {
  @Metadata({ data: "json, name=policyArn" })
  policyArn?: string;

  @Metadata({ data: "json, name=policyName" })
  policyName?: string;
}
