import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionStatusEnum } from "./connectionstatusenum";
import { ProviderTypeEnum } from "./providertypeenum";



// Connection
/** 
 * <p>A resource that is used to connect third-party source providers with services like AWS CodePipeline.</p> <p>Note: A connection created through CloudFormation, the CLI, or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by updating the connection in the console.</p>
**/
export class Connection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionArn" })
  connectionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ConnectionName" })
  connectionName?: string;

  @SpeakeasyMetadata({ data: "json, name=ConnectionStatus" })
  connectionStatus?: ConnectionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=HostArn" })
  hostArn?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerAccountId" })
  ownerAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProviderType" })
  providerType?: ProviderTypeEnum;
}
