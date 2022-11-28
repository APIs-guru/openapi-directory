import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateSecurityConfigurationOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
