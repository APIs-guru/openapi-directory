import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
import { Location } from "./location";
export declare class PostCommentForComparedCommitOutput extends SpeakeasyBase {
    afterBlobId?: string;
    afterCommitId?: string;
    beforeBlobId?: string;
    beforeCommitId?: string;
    comment?: Comment;
    location?: Location;
    repositoryName?: string;
}
