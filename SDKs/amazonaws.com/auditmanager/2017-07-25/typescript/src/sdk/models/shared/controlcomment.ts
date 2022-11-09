import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ControlComment
/** 
 *  A comment posted by a user on a control. This includes the author's name, the comment text, and a timestamp. 
**/
export class ControlComment extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorName" })
  authorName?: string;

  @Metadata({ data: "json, name=commentBody" })
  commentBody?: string;

  @Metadata({ data: "json, name=postedDate" })
  postedDate?: Date;
}
