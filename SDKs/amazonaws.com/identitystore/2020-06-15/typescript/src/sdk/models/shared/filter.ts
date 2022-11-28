import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Filter
/** 
 * A query filter used by <code>ListUsers</code> and <code>ListGroup</code>. This filter object provides the attribute name and attribute value to search users or groups.
**/
export class Filter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributePath" })
  attributePath: string;

  @SpeakeasyMetadata({ data: "json, name=AttributeValue" })
  attributeValue: string;
}
