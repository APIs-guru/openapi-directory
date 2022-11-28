import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVpceConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;
}
