import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProviderTypeEnum } from "./providertypeenum";
import { ConnectionStatusEnum } from "./connectionstatusenum";
/**
 * Provides summary information about an AWS App Runner connection resource.
**/
export declare class ConnectionSummary extends SpeakeasyBase {
    connectionArn?: string;
    connectionName?: string;
    createdAt?: Date;
    providerType?: ProviderTypeEnum;
    status?: ConnectionStatusEnum;
}
