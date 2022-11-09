import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeSecurityConfigurationOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SecurityConfiguration" })
  securityConfiguration?: string;
}
