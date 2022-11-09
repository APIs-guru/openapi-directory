import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApprovalResult } from "./approvalresult";


// PutApprovalResultInput
/** 
 * Represents the input of a <code>PutApprovalResult</code> action.
**/
export class PutApprovalResultInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionName" })
  actionName: string;

  @Metadata({ data: "json, name=pipelineName" })
  pipelineName: string;

  @Metadata({ data: "json, name=result" })
  result: ApprovalResult;

  @Metadata({ data: "json, name=stageName" })
  stageName: string;

  @Metadata({ data: "json, name=token" })
  token: string;
}
