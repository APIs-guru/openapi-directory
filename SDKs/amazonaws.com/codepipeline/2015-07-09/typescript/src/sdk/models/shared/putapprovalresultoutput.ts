import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PutApprovalResultOutput
/** 
 * Represents the output of a <code>PutApprovalResult</code> action.
**/
export class PutApprovalResultOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvedAt" })
  approvedAt?: Date;
}
