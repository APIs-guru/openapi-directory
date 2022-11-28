import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NodeTypeSpecificValue
/** 
 * Represents a parameter value that is applicable to a particular node type.
**/
export class NodeTypeSpecificValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NodeType" })
  nodeType?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
