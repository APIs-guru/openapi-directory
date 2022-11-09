import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateApplicationOutput
/** 
 * Represents the output of a <code>CreateApplication</code> operation.
**/
export class CreateApplicationOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationId" })
  applicationId?: string;
}
