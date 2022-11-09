import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=appSpecContent" })
  appSpecContent?: AppSpecContent;

  @Metadata({ data: "json, name=gitHubLocation" })
  gitHubLocation?: GitHubLocation;

  @Metadata({ data: "json, name=revisionType" })
  revisionType?: RevisionLocationTypeEnum;

  @Metadata({ data: "json, name=s3Location" })
  s3Location?: S3Location;

  @Metadata({ data: "json, name=string" })
  string?: RawString;
}
