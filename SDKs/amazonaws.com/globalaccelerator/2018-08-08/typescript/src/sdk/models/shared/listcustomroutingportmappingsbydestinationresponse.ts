import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DestinationPortMapping } from "./destinationportmapping";


export class ListCustomRoutingPortMappingsByDestinationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationPortMappings", elemType: shared.DestinationPortMapping })
  destinationPortMappings?: DestinationPortMapping[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
