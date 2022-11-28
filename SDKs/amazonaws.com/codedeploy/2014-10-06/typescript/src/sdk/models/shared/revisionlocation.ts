import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppSpecContent } from "./appspeccontent";
import { GitHubLocation } from "./githublocation";
import { RevisionLocationTypeEnum } from "./revisionlocationtypeenum";
import { S3Location } from "./s3location";
import { RawString } from "./rawstring";



// RevisionLocation
/** 
 * Information about the location of an application revision.
**/
export class RevisionLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appSpecContent" })
  appSpecContent?: AppSpecContent;

  @SpeakeasyMetadata({ data: "json, name=gitHubLocation" })
  gitHubLocation?: GitHubLocation;

  @SpeakeasyMetadata({ data: "json, name=revisionType" })
  revisionType?: RevisionLocationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=s3Location" })
  s3Location?: S3Location;

  @SpeakeasyMetadata({ data: "json, name=string" })
  string?: RawString;
}
