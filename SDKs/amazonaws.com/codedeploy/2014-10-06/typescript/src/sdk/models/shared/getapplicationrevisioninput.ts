import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RevisionLocation } from "./revisionlocation";



// GetApplicationRevisionInput
/** 
 * Represents the input of a <code>GetApplicationRevision</code> operation.
**/
export class GetApplicationRevisionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision: RevisionLocation;
}
