import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApprovalStateEnum } from "./approvalstateenum";



// ApprovalStateChangedEventMetadata
/** 
 * Returns information about a change in the approval state for a pull request.
**/
export class ApprovalStateChangedEventMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalStatus" })
  approvalStatus?: ApprovalStateEnum;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;
}
