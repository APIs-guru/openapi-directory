import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PullRequestStatusEnumEnum } from "./pullrequeststatusenumenum";


export class ListPullRequestsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorArn" })
  authorArn?: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=pullRequestStatus" })
  pullRequestStatus?: PullRequestStatusEnumEnum;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
