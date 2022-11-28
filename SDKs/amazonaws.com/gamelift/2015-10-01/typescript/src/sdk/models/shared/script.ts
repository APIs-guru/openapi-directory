import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";



// Script
/** 
 * <p>Properties describing a Realtime script.</p> <p> <b>Related actions</b> </p> <p> <a>CreateScript</a> | <a>ListScripts</a> | <a>DescribeScript</a> | <a>UpdateScript</a> | <a>DeleteScript</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
export class Script extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ScriptArn" })
  scriptArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ScriptId" })
  scriptId?: string;

  @SpeakeasyMetadata({ data: "json, name=SizeOnDisk" })
  sizeOnDisk?: number;

  @SpeakeasyMetadata({ data: "json, name=StorageLocation" })
  storageLocation?: S3Location;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
