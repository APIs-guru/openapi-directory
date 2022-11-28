import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";



export class CreateSecurityConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EncryptionConfiguration" })
  encryptionConfiguration: EncryptionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
