import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetVpceConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}
