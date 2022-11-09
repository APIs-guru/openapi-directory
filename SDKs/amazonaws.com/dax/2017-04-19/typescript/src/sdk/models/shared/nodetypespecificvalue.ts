import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NodeTypeSpecificValue
/** 
 * Represents a parameter value that is applicable to a particular node type.
**/
export class NodeTypeSpecificValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=NodeType" })
  nodeType?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
