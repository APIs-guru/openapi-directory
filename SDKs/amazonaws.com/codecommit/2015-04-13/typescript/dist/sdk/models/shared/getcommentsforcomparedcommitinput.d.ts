import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCommentsForComparedCommitInput extends SpeakeasyBase {
    afterCommitId: string;
    beforeCommitId?: string;
    maxResults?: number;
    nextToken?: string;
    repositoryName: string;
}
