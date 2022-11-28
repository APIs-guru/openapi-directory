import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystemEnum } from "./operatingsystemenum";
import { BuildStatusEnum } from "./buildstatusenum";



// Build
/** 
 * <p>Properties describing a custom game build.</p> <p> <b>Related actions</b> </p> <p> <a>CreateBuild</a> | <a>ListBuilds</a> | <a>DescribeBuild</a> | <a>UpdateBuild</a> | <a>DeleteBuild</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
export class Build extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BuildArn" })
  buildArn?: string;

  @SpeakeasyMetadata({ data: "json, name=BuildId" })
  buildId?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: OperatingSystemEnum;

  @SpeakeasyMetadata({ data: "json, name=SizeOnDisk" })
  sizeOnDisk?: number;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: BuildStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
