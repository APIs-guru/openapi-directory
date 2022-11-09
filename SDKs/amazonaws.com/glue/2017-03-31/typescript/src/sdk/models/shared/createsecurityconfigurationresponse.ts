import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateSecurityConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedTimestamp" })
  createdTimestamp?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
