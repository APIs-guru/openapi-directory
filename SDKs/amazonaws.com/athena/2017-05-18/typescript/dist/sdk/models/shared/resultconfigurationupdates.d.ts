import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";
/**
 * The information about the updates in the query results, such as output location and encryption configuration for the query results.
**/
export declare class ResultConfigurationUpdates extends SpeakeasyBase {
    encryptionConfiguration?: EncryptionConfiguration;
    outputLocation?: string;
    removeEncryptionConfiguration?: boolean;
    removeOutputLocation?: boolean;
}
