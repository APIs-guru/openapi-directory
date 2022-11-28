import { SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";
/**
 * <p>Properties describing a Realtime script.</p> <p> <b>Related actions</b> </p> <p> <a>CreateScript</a> | <a>ListScripts</a> | <a>DescribeScript</a> | <a>UpdateScript</a> | <a>DeleteScript</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
export declare class Script extends SpeakeasyBase {
    creationTime?: Date;
    name?: string;
    scriptArn?: string;
    scriptId?: string;
    sizeOnDisk?: number;
    storageLocation?: S3Location;
    version?: string;
}
