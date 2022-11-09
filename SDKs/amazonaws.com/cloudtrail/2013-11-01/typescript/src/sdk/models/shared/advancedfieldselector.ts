import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdvancedFieldSelector
/** 
 * A single selector statement in an advanced event selector.
**/
export class AdvancedFieldSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndsWith" })
  endsWith?: string[];

  @Metadata({ data: "json, name=Equals" })
  equals?: string[];

  @Metadata({ data: "json, name=Field" })
  field: string;

  @Metadata({ data: "json, name=NotEndsWith" })
  notEndsWith?: string[];

  @Metadata({ data: "json, name=NotEquals" })
  notEquals?: string[];

  @Metadata({ data: "json, name=NotStartsWith" })
  notStartsWith?: string[];

  @Metadata({ data: "json, name=StartsWith" })
  startsWith?: string[];
}
