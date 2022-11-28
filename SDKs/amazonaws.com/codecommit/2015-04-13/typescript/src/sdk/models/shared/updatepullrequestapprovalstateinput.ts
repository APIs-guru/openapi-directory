import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApprovalStateEnum } from "./approvalstateenum";



export class UpdatePullRequestApprovalStateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalState" })
  approvalState: ApprovalStateEnum;

  @SpeakeasyMetadata({ data: "json, name=pullRequestId" })
  pullRequestId: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId: string;
}
