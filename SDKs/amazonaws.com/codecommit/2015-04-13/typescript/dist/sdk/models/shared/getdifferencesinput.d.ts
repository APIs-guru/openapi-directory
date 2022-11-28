import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDifferencesInput extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    afterCommitSpecifier: string;
    afterPath?: string;
    beforeCommitSpecifier?: string;
    beforePath?: string;
    repositoryName: string;
}
