import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApprovalStatusEnum } from "./approvalstatusenum";


// ApprovalResult
/** 
 * Represents information about the result of an approval request.
**/
export class ApprovalResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status: ApprovalStatusEnum;

  @Metadata({ data: "json, name=summary" })
  summary: string;
}
