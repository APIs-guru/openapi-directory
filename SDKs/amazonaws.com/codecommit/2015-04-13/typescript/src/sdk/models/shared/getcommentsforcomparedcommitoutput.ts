import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommentsForComparedCommit } from "./commentsforcomparedcommit";



export class GetCommentsForComparedCommitOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commentsForComparedCommitData", elemType: CommentsForComparedCommit })
  commentsForComparedCommitData?: CommentsForComparedCommit[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
