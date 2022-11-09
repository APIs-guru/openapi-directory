import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PortMapping } from "./portmapping";


export class ListCustomRoutingPortMappingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PortMappings", elemType: shared.PortMapping })
  portMappings?: PortMapping[];
}
