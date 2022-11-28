import { SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystemEnum } from "./operatingsystemenum";
import { BuildStatusEnum } from "./buildstatusenum";
/**
 * <p>Properties describing a custom game build.</p> <p> <b>Related actions</b> </p> <p> <a>CreateBuild</a> | <a>ListBuilds</a> | <a>DescribeBuild</a> | <a>UpdateBuild</a> | <a>DeleteBuild</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
export declare class Build extends SpeakeasyBase {
    buildArn?: string;
    buildId?: string;
    creationTime?: Date;
    name?: string;
    operatingSystem?: OperatingSystemEnum;
    sizeOnDisk?: number;
    status?: BuildStatusEnum;
    version?: string;
}
