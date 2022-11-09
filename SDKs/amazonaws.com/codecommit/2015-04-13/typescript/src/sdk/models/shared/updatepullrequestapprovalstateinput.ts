import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApprovalStateEnum } from "./approvalstateenum";


export class UpdatePullRequestApprovalStateInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalState" })
  approvalState: ApprovalStateEnum;

  @Metadata({ data: "json, name=pullRequestId" })
  pullRequestId: string;

  @Metadata({ data: "json, name=revisionId" })
  revisionId: string;
}
