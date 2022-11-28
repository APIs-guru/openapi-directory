import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttributePayload
/** 
 * The attribute payload.
**/
export class AttributePayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=merge" })
  merge?: boolean;
}
