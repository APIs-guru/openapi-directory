import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateApplicationInput
/** 
 * Represents the input of an <code>UpdateApplication</code> operation.
**/
export class UpdateApplicationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName?: string;

  @SpeakeasyMetadata({ data: "json, name=newApplicationName" })
  newApplicationName?: string;
}
