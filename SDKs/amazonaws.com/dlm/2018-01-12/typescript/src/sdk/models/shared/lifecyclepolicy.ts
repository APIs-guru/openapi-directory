import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyDetails } from "./policydetails";
import { GettablePolicyStateValuesEnum } from "./gettablepolicystatevaluesenum";



// LifecyclePolicy
/** 
 * Detailed information about a lifecycle policy.
**/
export class LifecyclePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DateCreated" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=DateModified" })
  dateModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyArn" })
  policyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyDetails" })
  policyDetails?: PolicyDetails;

  @SpeakeasyMetadata({ data: "json, name=PolicyId" })
  policyId?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: GettablePolicyStateValuesEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
