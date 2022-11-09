import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateSecurityConfigurationOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
