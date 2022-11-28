import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
export declare class PostCommentForComparedCommitInput extends SpeakeasyBase {
    afterCommitId: string;
    beforeCommitId?: string;
    clientRequestToken?: string;
    content: string;
    location?: Location;
    repositoryName: string;
}
