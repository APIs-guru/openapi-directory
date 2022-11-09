import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RevisionLocation } from "./revisionlocation";


// RegisterApplicationRevisionInput
/** 
 * Represents the input of a RegisterApplicationRevision operation.
**/
export class RegisterApplicationRevisionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=revision" })
  revision: RevisionLocation;
}
