import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 *  A comment posted by a user on a control. This includes the author's name, the comment text, and a timestamp.
**/
export declare class ControlComment extends SpeakeasyBase {
    authorName?: string;
    commentBody?: string;
    postedDate?: Date;
}
