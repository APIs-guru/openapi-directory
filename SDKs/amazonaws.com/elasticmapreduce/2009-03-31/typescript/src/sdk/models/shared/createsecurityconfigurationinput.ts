import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateSecurityConfigurationInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=SecurityConfiguration" })
  securityConfiguration: string;
}
