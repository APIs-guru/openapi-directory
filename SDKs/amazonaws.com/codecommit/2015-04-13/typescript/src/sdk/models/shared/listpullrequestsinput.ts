import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PullRequestStatusEnumEnum } from "./pullrequeststatusenumenum";



export class ListPullRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorArn" })
  authorArn?: string;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=pullRequestStatus" })
  pullRequestStatus?: PullRequestStatusEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
