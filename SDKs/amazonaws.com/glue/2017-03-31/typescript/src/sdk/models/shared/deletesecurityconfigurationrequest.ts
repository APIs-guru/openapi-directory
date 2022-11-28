import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSecurityConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
