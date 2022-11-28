import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetApplicationInput
/** 
 * Represents the input of a <code>GetApplication</code> operation.
**/
export class GetApplicationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName: string;
}
