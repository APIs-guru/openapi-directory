import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodeRangeProperty } from "./noderangeproperty";



// NodeProperties
/** 
 * An object representing the node properties of a multi-node parallel job.
**/
export class NodeProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mainNode" })
  mainNode: number;

  @SpeakeasyMetadata({ data: "json, name=nodeRangeProperties", elemType: NodeRangeProperty })
  nodeRangeProperties: NodeRangeProperty[];

  @SpeakeasyMetadata({ data: "json, name=numNodes" })
  numNodes: number;
}
