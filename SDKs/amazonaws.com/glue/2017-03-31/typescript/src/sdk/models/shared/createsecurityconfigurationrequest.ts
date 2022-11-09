import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";


export class CreateSecurityConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EncryptionConfiguration" })
  encryptionConfiguration: EncryptionConfiguration;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
