import { SpeakeasyBase } from "../../../internal/utils";
import { AppSpecContent } from "./appspeccontent";
import { GitHubLocation } from "./githublocation";
import { RevisionLocationTypeEnum } from "./revisionlocationtypeenum";
import { S3Location } from "./s3location";
import { RawString } from "./rawstring";
/**
 * Information about the location of an application revision.
**/
export declare class RevisionLocation extends SpeakeasyBase {
    appSpecContent?: AppSpecContent;
    gitHubLocation?: GitHubLocation;
    revisionType?: RevisionLocationTypeEnum;
    s3Location?: S3Location;
    string?: RawString;
}
