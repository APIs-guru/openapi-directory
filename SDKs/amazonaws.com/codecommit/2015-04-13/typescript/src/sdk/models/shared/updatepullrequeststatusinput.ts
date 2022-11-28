import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PullRequestStatusEnumEnum } from "./pullrequeststatusenumenum";



export class UpdatePullRequestStatusInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pullRequestId" })
  pullRequestId: string;

  @SpeakeasyMetadata({ data: "json, name=pullRequestStatus" })
  pullRequestStatus: PullRequestStatusEnumEnum;
}
