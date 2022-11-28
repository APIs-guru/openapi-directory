import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationItem } from "./configurationitem";



export class GetAggregateResourceConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationItem" })
  configurationItem?: ConfigurationItem;
}
