import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
import { Location } from "./location";
/**
 * Returns information about comments on the comparison between two commits.
**/
export declare class CommentsForComparedCommit extends SpeakeasyBase {
    afterBlobId?: string;
    afterCommitId?: string;
    beforeBlobId?: string;
    beforeCommitId?: string;
    comments?: Comment[];
    location?: Location;
    repositoryName?: string;
}
