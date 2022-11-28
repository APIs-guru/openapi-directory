import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommentsForPullRequest } from "./commentsforpullrequest";



export class GetCommentsForPullRequestOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commentsForPullRequestData", elemType: CommentsForPullRequest })
  commentsForPullRequestData?: CommentsForPullRequest[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
