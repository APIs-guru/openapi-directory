import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectStorageServerProtocolEnum } from "./objectstorageserverprotocolenum";



// DescribeLocationObjectStorageResponse
/** 
 * DescribeLocationObjectStorageResponse
**/
export class DescribeLocationObjectStorageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessKey" })
  accessKey?: string;

  @SpeakeasyMetadata({ data: "json, name=AgentArns" })
  agentArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LocationArn" })
  locationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LocationUri" })
  locationUri?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerPort" })
  serverPort?: number;

  @SpeakeasyMetadata({ data: "json, name=ServerProtocol" })
  serverProtocol?: ObjectStorageServerProtocolEnum;
}
