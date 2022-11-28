import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A list of all identities that you have attempted to verify under your AWS account, regardless of verification status.
**/
export declare class ListIdentitiesResponse extends SpeakeasyBase {
    identities: string[];
    nextToken?: string;
}
