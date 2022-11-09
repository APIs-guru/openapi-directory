import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfigurationEvent } from "./configurationevent";


export class ListConfigurationHistoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventList", elemType: shared.ConfigurationEvent })
  eventList?: ConfigurationEvent[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
