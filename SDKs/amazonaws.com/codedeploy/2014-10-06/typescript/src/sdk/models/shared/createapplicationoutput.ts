import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateApplicationOutput
/** 
 * Represents the output of a <code>CreateApplication</code> operation.
**/
export class CreateApplicationOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationId" })
  applicationId?: string;
}
