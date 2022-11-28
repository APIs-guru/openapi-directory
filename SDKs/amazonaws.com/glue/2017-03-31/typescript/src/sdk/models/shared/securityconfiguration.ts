import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";



// SecurityConfiguration
/** 
 * Specifies a security configuration.
**/
export class SecurityConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedTimeStamp" })
  createdTimeStamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=EncryptionConfiguration" })
  encryptionConfiguration?: EncryptionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
