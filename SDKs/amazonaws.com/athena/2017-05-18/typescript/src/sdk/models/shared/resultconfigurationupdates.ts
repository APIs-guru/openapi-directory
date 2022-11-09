import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";


// ResultConfigurationUpdates
/** 
 * The information about the updates in the query results, such as output location and encryption configuration for the query results.
**/
export class ResultConfigurationUpdates extends SpeakeasyBase {
  @Metadata({ data: "json, name=EncryptionConfiguration" })
  encryptionConfiguration?: EncryptionConfiguration;

  @Metadata({ data: "json, name=OutputLocation" })
  outputLocation?: string;

  @Metadata({ data: "json, name=RemoveEncryptionConfiguration" })
  removeEncryptionConfiguration?: boolean;

  @Metadata({ data: "json, name=RemoveOutputLocation" })
  removeOutputLocation?: boolean;
}
