import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeConfigurationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configurations" })
  configurations?: Map<string, string>[];
}
