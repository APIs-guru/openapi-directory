import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CommentsForComparedCommit } from "./commentsforcomparedcommit";


export class GetCommentsForComparedCommitOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=commentsForComparedCommitData", elemType: shared.CommentsForComparedCommit })
  commentsForComparedCommitData?: CommentsForComparedCommit[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
