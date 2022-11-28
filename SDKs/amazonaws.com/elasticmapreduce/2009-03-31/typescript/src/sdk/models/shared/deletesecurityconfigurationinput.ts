import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSecurityConfigurationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
