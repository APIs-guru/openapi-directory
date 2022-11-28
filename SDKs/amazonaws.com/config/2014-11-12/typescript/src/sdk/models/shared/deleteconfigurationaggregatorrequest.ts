import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteConfigurationAggregatorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationAggregatorName" })
  configurationAggregatorName: string;
}
