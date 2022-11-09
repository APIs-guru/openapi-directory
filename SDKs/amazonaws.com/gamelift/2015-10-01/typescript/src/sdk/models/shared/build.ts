import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OperatingSystemEnum } from "./operatingsystemenum";
import { BuildStatusEnum } from "./buildstatusenum";


// Build
/** 
 * <p>Properties describing a custom game build.</p> <p> <b>Related actions</b> </p> <p> <a>CreateBuild</a> | <a>ListBuilds</a> | <a>DescribeBuild</a> | <a>UpdateBuild</a> | <a>DeleteBuild</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
export class Build extends SpeakeasyBase {
  @Metadata({ data: "json, name=BuildArn" })
  buildArn?: string;

  @Metadata({ data: "json, name=BuildId" })
  buildId?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: OperatingSystemEnum;

  @Metadata({ data: "json, name=SizeOnDisk" })
  sizeOnDisk?: number;

  @Metadata({ data: "json, name=Status" })
  status?: BuildStatusEnum;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
