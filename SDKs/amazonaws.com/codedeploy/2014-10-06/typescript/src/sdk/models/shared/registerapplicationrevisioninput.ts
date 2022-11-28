import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RevisionLocation } from "./revisionlocation";



// RegisterApplicationRevisionInput
/** 
 * Represents the input of a RegisterApplicationRevision operation.
**/
export class RegisterApplicationRevisionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision: RevisionLocation;
}
