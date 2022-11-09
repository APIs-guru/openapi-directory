import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteApplicationInput
/** 
 * Represents the input of a <code>DeleteApplication</code> operation.
**/
export class DeleteApplicationInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationName" })
  applicationName: string;
}
