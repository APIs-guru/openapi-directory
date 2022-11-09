import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationItem } from "./configurationitem";


export class GetAggregateResourceConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationItem" })
  configurationItem?: ConfigurationItem;
}
