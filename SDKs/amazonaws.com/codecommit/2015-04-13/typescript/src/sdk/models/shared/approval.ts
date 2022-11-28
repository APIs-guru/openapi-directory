import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApprovalStateEnum } from "./approvalstateenum";



// Approval
/** 
 * Returns information about a specific approval on a pull request.
**/
export class Approval extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalState" })
  approvalState?: ApprovalStateEnum;

  @SpeakeasyMetadata({ data: "json, name=userArn" })
  userArn?: string;
}
