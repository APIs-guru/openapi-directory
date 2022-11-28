import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";



// ResultConfigurationUpdates
/** 
 * The information about the updates in the query results, such as output location and encryption configuration for the query results.
**/
export class ResultConfigurationUpdates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EncryptionConfiguration" })
  encryptionConfiguration?: EncryptionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=OutputLocation" })
  outputLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=RemoveEncryptionConfiguration" })
  removeEncryptionConfiguration?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RemoveOutputLocation" })
  removeOutputLocation?: boolean;
}
