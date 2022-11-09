import { SpeakeasyBase } from "../../../internal/utils/utils";
import { StorageConnectorTypeEnum } from "./storageconnectortypeenum";
/**
 * Describes a connector that enables persistent storage for users.
**/
export declare class StorageConnector extends SpeakeasyBase {
    connectorType: StorageConnectorTypeEnum;
    domains?: string[];
    resourceIdentifier?: string;
}
