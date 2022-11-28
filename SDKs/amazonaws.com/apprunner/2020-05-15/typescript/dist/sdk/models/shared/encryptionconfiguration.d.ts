import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a custom encryption key that AWS App Runner uses to encrypt copies of the source repository and service logs.
**/
export declare class EncryptionConfiguration extends SpeakeasyBase {
    kmsKey: string;
}
