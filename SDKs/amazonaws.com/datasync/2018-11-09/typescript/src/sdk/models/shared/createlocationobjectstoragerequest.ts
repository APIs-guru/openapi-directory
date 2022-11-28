import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectStorageServerProtocolEnum } from "./objectstorageserverprotocolenum";
import { TagListEntry } from "./taglistentry";



// CreateLocationObjectStorageRequest
/** 
 * CreateLocationObjectStorageRequest
**/
export class CreateLocationObjectStorageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessKey" })
  accessKey?: string;

  @SpeakeasyMetadata({ data: "json, name=AgentArns" })
  agentArns: string[];

  @SpeakeasyMetadata({ data: "json, name=BucketName" })
  bucketName: string;

  @SpeakeasyMetadata({ data: "json, name=SecretKey" })
  secretKey?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerHostname" })
  serverHostname: string;

  @SpeakeasyMetadata({ data: "json, name=ServerPort" })
  serverPort?: number;

  @SpeakeasyMetadata({ data: "json, name=ServerProtocol" })
  serverProtocol?: ObjectStorageServerProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=Subdirectory" })
  subdirectory?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: TagListEntry })
  tags?: TagListEntry[];
}
