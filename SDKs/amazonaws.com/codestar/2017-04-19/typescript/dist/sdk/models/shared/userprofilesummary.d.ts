import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Information about a user's profile in AWS CodeStar.
**/
export declare class UserProfileSummary extends SpeakeasyBase {
    displayName?: string;
    emailAddress?: string;
    sshPublicKey?: string;
    userArn?: string;
}
