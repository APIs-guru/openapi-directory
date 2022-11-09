import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSecurityConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
