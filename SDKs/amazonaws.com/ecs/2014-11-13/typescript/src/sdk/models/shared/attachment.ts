import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyValuePair } from "./keyvaluepair";



// Attachment
/** 
 * An object representing a container instance or task attachment.
**/
export class Attachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details", elemType: KeyValuePair })
  details?: KeyValuePair[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
