import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyValuePair } from "./keyvaluepair";


// Attachment
/** 
 * An object representing a container instance or task attachment.
**/
export class Attachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=details", elemType: shared.KeyValuePair })
  details?: KeyValuePair[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
