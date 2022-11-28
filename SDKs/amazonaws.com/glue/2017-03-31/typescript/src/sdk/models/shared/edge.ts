import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Edge
/** 
 * An edge represents a directed connection between two components on a workflow graph.
**/
export class Edge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationId" })
  destinationId?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceId" })
  sourceId?: string;
}
