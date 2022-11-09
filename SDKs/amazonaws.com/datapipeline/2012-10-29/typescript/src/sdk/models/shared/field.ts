import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Field
/** 
 * A key-value pair that describes a property of a pipeline object. The value is specified as either a string value (<code>StringValue</code>) or a reference to another object (<code>RefValue</code>) but not as both.
**/
export class Field extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=refValue" })
  refValue?: string;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
