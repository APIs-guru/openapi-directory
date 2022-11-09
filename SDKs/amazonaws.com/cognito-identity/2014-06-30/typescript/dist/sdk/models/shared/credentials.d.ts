import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Credentials for the provided identity ID.
**/
export declare class Credentials extends SpeakeasyBase {
    accessKeyId?: string;
    expiration?: Date;
    secretKey?: string;
    sessionToken?: string;
}
