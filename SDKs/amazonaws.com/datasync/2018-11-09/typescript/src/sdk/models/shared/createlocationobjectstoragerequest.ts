import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObjectStorageServerProtocolEnum } from "./objectstorageserverprotocolenum";
import { TagListEntry } from "./taglistentry";


// CreateLocationObjectStorageRequest
/** 
 * CreateLocationObjectStorageRequest
**/
export class CreateLocationObjectStorageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessKey" })
  accessKey?: string;

  @Metadata({ data: "json, name=AgentArns" })
  agentArns: string[];

  @Metadata({ data: "json, name=BucketName" })
  bucketName: string;

  @Metadata({ data: "json, name=SecretKey" })
  secretKey?: string;

  @Metadata({ data: "json, name=ServerHostname" })
  serverHostname: string;

  @Metadata({ data: "json, name=ServerPort" })
  serverPort?: number;

  @Metadata({ data: "json, name=ServerProtocol" })
  serverProtocol?: ObjectStorageServerProtocolEnum;

  @Metadata({ data: "json, name=Subdirectory" })
  subdirectory?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.TagListEntry })
  tags?: TagListEntry[];
}
