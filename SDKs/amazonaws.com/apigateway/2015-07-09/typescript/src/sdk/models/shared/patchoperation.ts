import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OpEnum } from "./openum";


// PatchOperation
/** 
 * A single patch operation to apply to the specified resource. Please refer to http://tools.ietf.org/html/rfc6902#section-4 for an explanation of how each operation is used.
**/
export class PatchOperation extends SpeakeasyBase {
  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=op" })
  op?: OpEnum;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
