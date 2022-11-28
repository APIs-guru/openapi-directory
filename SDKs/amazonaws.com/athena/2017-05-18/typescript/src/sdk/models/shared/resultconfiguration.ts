import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";



// ResultConfiguration
/** 
 * The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings.
**/
export class ResultConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EncryptionConfiguration" })
  encryptionConfiguration?: EncryptionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=OutputLocation" })
  outputLocation?: string;
}
