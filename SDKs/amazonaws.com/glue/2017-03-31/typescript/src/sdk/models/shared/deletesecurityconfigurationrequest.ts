import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSecurityConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
