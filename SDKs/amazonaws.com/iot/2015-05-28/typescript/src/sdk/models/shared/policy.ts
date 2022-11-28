import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Policy
/** 
 * Describes an IoT policy.
**/
export class Policy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policyArn" })
  policyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=policyName" })
  policyName?: string;
}
