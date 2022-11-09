import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteConfigurationAggregatorRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationAggregatorName" })
  configurationAggregatorName: string;
}
