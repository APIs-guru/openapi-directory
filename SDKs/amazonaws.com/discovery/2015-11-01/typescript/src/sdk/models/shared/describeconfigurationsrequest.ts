import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeConfigurationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configurationIds" })
  configurationIds: string[];
}
