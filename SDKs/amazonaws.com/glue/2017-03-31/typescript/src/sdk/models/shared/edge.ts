import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Edge
/** 
 * An edge represents a directed connection between two components on a workflow graph.
**/
export class Edge extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationId" })
  destinationId?: string;

  @Metadata({ data: "json, name=SourceId" })
  sourceId?: string;
}
