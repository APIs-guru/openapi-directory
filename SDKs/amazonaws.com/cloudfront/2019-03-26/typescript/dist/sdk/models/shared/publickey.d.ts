import { SpeakeasyBase } from "../../../internal/utils";
import { PublicKeyConfig } from "./publickeyconfig";
/**
 * A complex data type of public keys you add to CloudFront to use with features like field-level encryption.
**/
export declare class PublicKey extends SpeakeasyBase {
    createdTime: Date;
    id: string;
    publicKeyConfig: PublicKeyConfig;
}
