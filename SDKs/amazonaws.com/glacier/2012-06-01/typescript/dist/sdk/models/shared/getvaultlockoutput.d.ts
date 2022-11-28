import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the Amazon S3 Glacier response to your request.
**/
export declare class GetVaultLockOutput extends SpeakeasyBase {
    creationDate?: string;
    expirationDate?: string;
    policy?: string;
    state?: string;
}
