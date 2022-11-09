import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AttributePayload
/** 
 * The attribute payload.
**/
export class AttributePayload extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=merge" })
  merge?: boolean;
}
