import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RevisionLocation } from "./revisionlocation";
import { GenericRevisionInfo } from "./genericrevisioninfo";


// GetApplicationRevisionOutput
/** 
 * Represents the output of a <code>GetApplicationRevision</code> operation.
**/
export class GetApplicationRevisionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationName" })
  applicationName?: string;

  @Metadata({ data: "json, name=revision" })
  revision?: RevisionLocation;

  @Metadata({ data: "json, name=revisionInfo" })
  revisionInfo?: GenericRevisionInfo;
}
