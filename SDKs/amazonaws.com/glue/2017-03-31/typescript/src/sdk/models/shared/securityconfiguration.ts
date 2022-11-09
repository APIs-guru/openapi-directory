import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";


// SecurityConfiguration
/** 
 * Specifies a security configuration.
**/
export class SecurityConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedTimeStamp" })
  createdTimeStamp?: Date;

  @Metadata({ data: "json, name=EncryptionConfiguration" })
  encryptionConfiguration?: EncryptionConfiguration;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
