import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Returns information about a specific comment.
**/
export declare class Comment extends SpeakeasyBase {
    authorArn?: string;
    callerReactions?: string[];
    clientRequestToken?: string;
    commentId?: string;
    content?: string;
    creationDate?: Date;
    deleted?: boolean;
    inReplyTo?: string;
    lastModifiedDate?: Date;
    reactionCounts?: Map<string, number>;
}
