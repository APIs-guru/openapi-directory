import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldContentTypeEnum } from "./fieldcontenttypeenum";


// ObjectTypeField
/** 
 * Represents a field in a ProfileObjectType.
**/
export class ObjectTypeField extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContentType" })
  contentType?: FieldContentTypeEnum;

  @Metadata({ data: "json, name=Source" })
  source?: string;

  @Metadata({ data: "json, name=Target" })
  target?: string;
}
