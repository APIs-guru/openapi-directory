import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdvancedFieldSelector
/** 
 * A single selector statement in an advanced event selector.
**/
export class AdvancedFieldSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndsWith" })
  endsWith?: string[];

  @SpeakeasyMetadata({ data: "json, name=Equals" })
  equals?: string[];

  @SpeakeasyMetadata({ data: "json, name=Field" })
  field: string;

  @SpeakeasyMetadata({ data: "json, name=NotEndsWith" })
  notEndsWith?: string[];

  @SpeakeasyMetadata({ data: "json, name=NotEquals" })
  notEquals?: string[];

  @SpeakeasyMetadata({ data: "json, name=NotStartsWith" })
  notStartsWith?: string[];

  @SpeakeasyMetadata({ data: "json, name=StartsWith" })
  startsWith?: string[];
}
