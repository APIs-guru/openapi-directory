import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Approval } from "./approval";


export class GetPullRequestApprovalStatesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvals", elemType: shared.Approval })
  approvals?: Approval[];
}
