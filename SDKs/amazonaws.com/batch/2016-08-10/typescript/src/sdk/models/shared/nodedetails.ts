import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NodeDetails
/** 
 * An object representing the details of a multi-node parallel job node.
**/
export class NodeDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=isMainNode" })
  isMainNode?: boolean;

  @Metadata({ data: "json, name=nodeIndex" })
  nodeIndex?: number;
}
