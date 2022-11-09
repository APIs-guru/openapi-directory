import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApprovalStateEnum } from "./approvalstateenum";


// Approval
/** 
 * Returns information about a specific approval on a pull request.
**/
export class Approval extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalState" })
  approvalState?: ApprovalStateEnum;

  @Metadata({ data: "json, name=userArn" })
  userArn?: string;
}
