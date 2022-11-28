import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortMapping } from "./portmapping";



export class ListCustomRoutingPortMappingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PortMappings", elemType: PortMapping })
  portMappings?: PortMapping[];
}
