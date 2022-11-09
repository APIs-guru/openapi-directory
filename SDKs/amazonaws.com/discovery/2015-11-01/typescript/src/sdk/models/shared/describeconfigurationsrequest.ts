import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeConfigurationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=configurationIds" })
  configurationIds: string[];
}
