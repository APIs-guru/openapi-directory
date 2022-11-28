import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateSecurityConfigurationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityConfiguration" })
  securityConfiguration: string;
}
