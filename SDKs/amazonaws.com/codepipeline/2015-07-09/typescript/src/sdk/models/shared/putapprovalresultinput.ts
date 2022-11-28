import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApprovalResult } from "./approvalresult";



// PutApprovalResultInput
/** 
 * Represents the input of a <code>PutApprovalResult</code> action.
**/
export class PutApprovalResultInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionName" })
  actionName: string;

  @SpeakeasyMetadata({ data: "json, name=pipelineName" })
  pipelineName: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ApprovalResult;

  @SpeakeasyMetadata({ data: "json, name=stageName" })
  stageName: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;
}
