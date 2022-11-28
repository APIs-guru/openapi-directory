import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NodeDetails
/** 
 * An object representing the details of a multi-node parallel job node.
**/
export class NodeDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isMainNode" })
  isMainNode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nodeIndex" })
  nodeIndex?: number;
}
