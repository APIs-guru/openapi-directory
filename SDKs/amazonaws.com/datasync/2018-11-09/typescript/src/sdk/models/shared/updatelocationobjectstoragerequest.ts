import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectStorageServerProtocolEnum } from "./objectstorageserverprotocolenum";


export class UpdateLocationObjectStorageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessKey" })
  accessKey?: string;

  @Metadata({ data: "json, name=AgentArns" })
  agentArns?: string[];

  @Metadata({ data: "json, name=LocationArn" })
  locationArn: string;

  @Metadata({ data: "json, name=SecretKey" })
  secretKey?: string;

  @Metadata({ data: "json, name=ServerPort" })
  serverPort?: number;

  @Metadata({ data: "json, name=ServerProtocol" })
  serverProtocol?: ObjectStorageServerProtocolEnum;

  @Metadata({ data: "json, name=Subdirectory" })
  subdirectory?: string;
}
