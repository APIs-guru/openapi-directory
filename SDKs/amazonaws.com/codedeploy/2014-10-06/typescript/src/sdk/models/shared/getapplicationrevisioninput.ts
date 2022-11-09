import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RevisionLocation } from "./revisionlocation";


// GetApplicationRevisionInput
/** 
 * Represents the input of a <code>GetApplicationRevision</code> operation.
**/
export class GetApplicationRevisionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=revision" })
  revision: RevisionLocation;
}
