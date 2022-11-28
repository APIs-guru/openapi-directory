import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeSecurityConfigurationOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityConfiguration" })
  securityConfiguration?: string;
}
