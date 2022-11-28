import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteApplicationInput
/** 
 * Represents the input of a <code>DeleteApplication</code> operation.
**/
export class DeleteApplicationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName: string;
}
