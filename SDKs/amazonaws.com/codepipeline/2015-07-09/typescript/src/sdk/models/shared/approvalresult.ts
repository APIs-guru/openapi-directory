import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApprovalStatusEnum } from "./approvalstatusenum";



// ApprovalResult
/** 
 * Represents information about the result of an approval request.
**/
export class ApprovalResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ApprovalStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary: string;
}
