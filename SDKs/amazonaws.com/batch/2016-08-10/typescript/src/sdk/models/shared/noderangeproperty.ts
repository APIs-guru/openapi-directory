import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerProperties } from "./containerproperties";


// NodeRangeProperty
/** 
 * An object representing the properties of the node range for a multi-node parallel job.
**/
export class NodeRangeProperty extends SpeakeasyBase {
  @Metadata({ data: "json, name=container" })
  container?: ContainerProperties;

  @Metadata({ data: "json, name=targetNodes" })
  targetNodes: string;
}
