import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateApplicationInput
/** 
 * Represents the input of an <code>UpdateApplication</code> operation.
**/
export class UpdateApplicationInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationName" })
  applicationName?: string;

  @Metadata({ data: "json, name=newApplicationName" })
  newApplicationName?: string;
}
