import { SpeakeasyBase } from "../../../internal/utils";
import { ProviderTypeEnum } from "./providertypeenum";
import { ConnectionStatusEnum } from "./connectionstatusenum";
/**
 * Describes an AWS App Runner connection resource.
**/
export declare class Connection extends SpeakeasyBase {
    connectionArn?: string;
    connectionName?: string;
    createdAt?: Date;
    providerType?: ProviderTypeEnum;
    status?: ConnectionStatusEnum;
}
