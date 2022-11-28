import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationPortMapping } from "./destinationportmapping";



export class ListCustomRoutingPortMappingsByDestinationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationPortMappings", elemType: DestinationPortMapping })
  destinationPortMappings?: DestinationPortMapping[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
