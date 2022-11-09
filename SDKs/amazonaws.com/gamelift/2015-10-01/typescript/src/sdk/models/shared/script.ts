import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Location } from "./s3location";


// Script
/** 
 * <p>Properties describing a Realtime script.</p> <p> <b>Related actions</b> </p> <p> <a>CreateScript</a> | <a>ListScripts</a> | <a>DescribeScript</a> | <a>UpdateScript</a> | <a>DeleteScript</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
export class Script extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ScriptArn" })
  scriptArn?: string;

  @Metadata({ data: "json, name=ScriptId" })
  scriptId?: string;

  @Metadata({ data: "json, name=SizeOnDisk" })
  sizeOnDisk?: number;

  @Metadata({ data: "json, name=StorageLocation" })
  storageLocation?: S3Location;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
