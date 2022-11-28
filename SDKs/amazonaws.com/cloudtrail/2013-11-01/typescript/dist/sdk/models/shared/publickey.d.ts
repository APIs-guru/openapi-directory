import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about a returned public key.
**/
export declare class PublicKey extends SpeakeasyBase {
    fingerprint?: string;
    validityEndTime?: Date;
    validityStartTime?: Date;
    value?: string;
}
