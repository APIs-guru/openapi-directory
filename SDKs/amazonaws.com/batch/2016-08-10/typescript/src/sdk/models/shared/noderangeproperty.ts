import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerProperties } from "./containerproperties";



// NodeRangeProperty
/** 
 * An object representing the properties of the node range for a multi-node parallel job.
**/
export class NodeRangeProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=container" })
  container?: ContainerProperties;

  @SpeakeasyMetadata({ data: "json, name=targetNodes" })
  targetNodes: string;
}
