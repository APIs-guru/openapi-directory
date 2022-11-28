import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldContentTypeEnum } from "./fieldcontenttypeenum";



// ObjectTypeField
/** 
 * Represents a field in a ProfileObjectType.
**/
export class ObjectTypeField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContentType" })
  contentType?: FieldContentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=Target" })
  target?: string;
}
