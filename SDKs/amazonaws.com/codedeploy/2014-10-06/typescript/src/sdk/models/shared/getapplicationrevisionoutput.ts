import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RevisionLocation } from "./revisionlocation";
import { GenericRevisionInfo } from "./genericrevisioninfo";



// GetApplicationRevisionOutput
/** 
 * Represents the output of a <code>GetApplicationRevision</code> operation.
**/
export class GetApplicationRevisionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName?: string;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: RevisionLocation;

  @SpeakeasyMetadata({ data: "json, name=revisionInfo" })
  revisionInfo?: GenericRevisionInfo;
}
