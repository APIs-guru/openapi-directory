import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSecurityConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
