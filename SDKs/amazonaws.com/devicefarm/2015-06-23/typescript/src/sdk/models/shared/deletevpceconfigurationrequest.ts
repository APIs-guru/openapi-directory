import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteVpceConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;
}
