import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSecurityConfigurationInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
