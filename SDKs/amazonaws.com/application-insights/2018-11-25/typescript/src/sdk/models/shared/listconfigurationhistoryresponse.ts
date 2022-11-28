import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationEvent } from "./configurationevent";



export class ListConfigurationHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventList", elemType: ConfigurationEvent })
  eventList?: ConfigurationEvent[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
