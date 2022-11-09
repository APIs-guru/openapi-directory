import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NodeRangeProperty } from "./noderangeproperty";


// NodeProperties
/** 
 * An object representing the node properties of a multi-node parallel job.
**/
export class NodeProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=mainNode" })
  mainNode: number;

  @Metadata({ data: "json, name=nodeRangeProperties", elemType: shared.NodeRangeProperty })
  nodeRangeProperties: NodeRangeProperty[];

  @Metadata({ data: "json, name=numNodes" })
  numNodes: number;
}
