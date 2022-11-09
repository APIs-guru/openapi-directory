import { SpeakeasyBase } from "../../../internal/utils/utils";
import { KmsEncryptionConfig } from "./kmsencryptionconfig";
/**
 *  The server-side encryption key configuration for a customer provided encryption key.
**/
export declare class SseConfiguration extends SpeakeasyBase {
    kmsEncryptionConfig: KmsEncryptionConfig;
}
