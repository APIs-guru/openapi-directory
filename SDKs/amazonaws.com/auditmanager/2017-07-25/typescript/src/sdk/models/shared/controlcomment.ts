import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ControlComment
/** 
 *  A comment posted by a user on a control. This includes the author's name, the comment text, and a timestamp. 
**/
export class ControlComment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorName" })
  authorName?: string;

  @SpeakeasyMetadata({ data: "json, name=commentBody" })
  commentBody?: string;

  @SpeakeasyMetadata({ data: "json, name=postedDate" })
  postedDate?: Date;
}
