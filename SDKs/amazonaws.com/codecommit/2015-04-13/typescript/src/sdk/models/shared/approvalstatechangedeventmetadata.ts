import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApprovalStateEnum } from "./approvalstateenum";


// ApprovalStateChangedEventMetadata
/** 
 * Returns information about a change in the approval state for a pull request.
**/
export class ApprovalStateChangedEventMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalStatus" })
  approvalStatus?: ApprovalStateEnum;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;
}
