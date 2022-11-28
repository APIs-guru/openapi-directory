import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateSecurityConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedTimestamp" })
  createdTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
