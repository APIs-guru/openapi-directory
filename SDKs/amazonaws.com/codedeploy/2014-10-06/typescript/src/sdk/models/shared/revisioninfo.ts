import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GenericRevisionInfo } from "./genericrevisioninfo";
import { RevisionLocation } from "./revisionlocation";



// RevisionInfo
/** 
 * Information about an application revision.
**/
export class RevisionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=genericRevisionInfo" })
  genericRevisionInfo?: GenericRevisionInfo;

  @SpeakeasyMetadata({ data: "json, name=revisionLocation" })
  revisionLocation?: RevisionLocation;
}
