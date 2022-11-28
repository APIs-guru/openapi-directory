import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configurations" })
  configurations?: Map<string, string>[];
}
