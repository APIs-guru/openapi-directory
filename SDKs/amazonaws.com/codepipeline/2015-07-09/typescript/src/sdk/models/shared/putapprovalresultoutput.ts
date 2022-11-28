import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PutApprovalResultOutput
/** 
 * Represents the output of a <code>PutApprovalResult</code> action.
**/
export class PutApprovalResultOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvedAt" })
  approvedAt?: Date;
}
