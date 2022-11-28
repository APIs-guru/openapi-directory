import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
import { Location } from "./location";
/**
 * Returns information about comments on a pull request.
**/
export declare class CommentsForPullRequest extends SpeakeasyBase {
    afterBlobId?: string;
    afterCommitId?: string;
    beforeBlobId?: string;
    beforeCommitId?: string;
    comments?: Comment[];
    location?: Location;
    pullRequestId?: string;
    repositoryName?: string;
}
