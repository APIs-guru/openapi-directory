import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GenericRevisionInfo } from "./genericrevisioninfo";
import { RevisionLocation } from "./revisionlocation";


// RevisionInfo
/** 
 * Information about an application revision.
**/
export class RevisionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=genericRevisionInfo" })
  genericRevisionInfo?: GenericRevisionInfo;

  @Metadata({ data: "json, name=revisionLocation" })
  revisionLocation?: RevisionLocation;
}
