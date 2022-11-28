import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectStorageServerProtocolEnum } from "./objectstorageserverprotocolenum";



export class UpdateLocationObjectStorageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessKey" })
  accessKey?: string;

  @SpeakeasyMetadata({ data: "json, name=AgentArns" })
  agentArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=LocationArn" })
  locationArn: string;

  @SpeakeasyMetadata({ data: "json, name=SecretKey" })
  secretKey?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerPort" })
  serverPort?: number;

  @SpeakeasyMetadata({ data: "json, name=ServerProtocol" })
  serverProtocol?: ObjectStorageServerProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=Subdirectory" })
  subdirectory?: string;
}
