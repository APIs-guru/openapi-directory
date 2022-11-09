import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionStatusEnum } from "./connectionstatusenum";
import { ProviderTypeEnum } from "./providertypeenum";
/**
 * <p>A resource that is used to connect third-party source providers with services like AWS CodePipeline.</p> <p>Note: A connection created through CloudFormation, the CLI, or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by updating the connection in the console.</p>
**/
export declare class Connection extends SpeakeasyBase {
    connectionArn?: string;
    connectionName?: string;
    connectionStatus?: ConnectionStatusEnum;
    hostArn?: string;
    ownerAccountId?: string;
    providerType?: ProviderTypeEnum;
}
