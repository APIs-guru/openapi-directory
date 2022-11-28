import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
export declare class PostCommentForPullRequestInput extends SpeakeasyBase {
    afterCommitId: string;
    beforeCommitId: string;
    clientRequestToken?: string;
    content: string;
    location?: Location;
    pullRequestId: string;
    repositoryName: string;
}
