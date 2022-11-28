import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeSecurityConfigurationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
