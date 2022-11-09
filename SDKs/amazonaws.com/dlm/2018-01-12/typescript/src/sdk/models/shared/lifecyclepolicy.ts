import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PolicyDetails } from "./policydetails";
import { GettablePolicyStateValuesEnum } from "./gettablepolicystatevaluesenum";


// LifecyclePolicy
/** 
 * Detailed information about a lifecycle policy.
**/
export class LifecyclePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=DateCreated" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=DateModified" })
  dateModified?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn?: string;

  @Metadata({ data: "json, name=PolicyArn" })
  policyArn?: string;

  @Metadata({ data: "json, name=PolicyDetails" })
  policyDetails?: PolicyDetails;

  @Metadata({ data: "json, name=PolicyId" })
  policyId?: string;

  @Metadata({ data: "json, name=State" })
  state?: GettablePolicyStateValuesEnum;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
