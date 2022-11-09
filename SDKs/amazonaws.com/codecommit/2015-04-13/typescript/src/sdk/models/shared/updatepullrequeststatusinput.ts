import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PullRequestStatusEnumEnum } from "./pullrequeststatusenumenum";


export class UpdatePullRequestStatusInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=pullRequestId" })
  pullRequestId: string;

  @Metadata({ data: "json, name=pullRequestStatus" })
  pullRequestStatus: PullRequestStatusEnumEnum;
}
