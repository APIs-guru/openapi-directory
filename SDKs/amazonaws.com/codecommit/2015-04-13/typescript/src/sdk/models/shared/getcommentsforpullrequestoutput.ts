import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CommentsForPullRequest } from "./commentsforpullrequest";


export class GetCommentsForPullRequestOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=commentsForPullRequestData", elemType: shared.CommentsForPullRequest })
  commentsForPullRequestData?: CommentsForPullRequest[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
