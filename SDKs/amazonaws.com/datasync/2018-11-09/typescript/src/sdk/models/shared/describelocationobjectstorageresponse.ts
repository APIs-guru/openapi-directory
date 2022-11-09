import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectStorageServerProtocolEnum } from "./objectstorageserverprotocolenum";


// DescribeLocationObjectStorageResponse
/** 
 * DescribeLocationObjectStorageResponse
**/
export class DescribeLocationObjectStorageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessKey" })
  accessKey?: string;

  @Metadata({ data: "json, name=AgentArns" })
  agentArns?: string[];

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=LocationArn" })
  locationArn?: string;

  @Metadata({ data: "json, name=LocationUri" })
  locationUri?: string;

  @Metadata({ data: "json, name=ServerPort" })
  serverPort?: number;

  @Metadata({ data: "json, name=ServerProtocol" })
  serverProtocol?: ObjectStorageServerProtocolEnum;
}
