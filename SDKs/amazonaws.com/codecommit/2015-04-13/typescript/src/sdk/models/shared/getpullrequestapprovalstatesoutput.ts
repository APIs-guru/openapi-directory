import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Approval } from "./approval";



export class GetPullRequestApprovalStatesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvals", elemType: Approval })
  approvals?: Approval[];
}
