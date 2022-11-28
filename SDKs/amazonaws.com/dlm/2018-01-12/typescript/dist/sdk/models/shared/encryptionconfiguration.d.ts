import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the encryption settings for shared snapshots that are copied across Regions.
**/
export declare class EncryptionConfiguration extends SpeakeasyBase {
    cmkArn?: string;
    encrypted: boolean;
}
