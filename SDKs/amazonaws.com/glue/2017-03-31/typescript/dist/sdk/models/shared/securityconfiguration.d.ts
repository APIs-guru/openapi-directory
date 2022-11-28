import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";
/**
 * Specifies a security configuration.
**/
export declare class SecurityConfiguration extends SpeakeasyBase {
    createdTimeStamp?: Date;
    encryptionConfiguration?: EncryptionConfiguration;
    name?: string;
}
