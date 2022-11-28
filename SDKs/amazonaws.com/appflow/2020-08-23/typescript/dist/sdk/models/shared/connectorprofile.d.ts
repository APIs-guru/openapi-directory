import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionModeEnum } from "./connectionmodeenum";
import { ConnectorProfileProperties } from "./connectorprofileproperties";
import { ConnectorTypeEnum } from "./connectortypeenum";
import { PrivateConnectionProvisioningState } from "./privateconnectionprovisioningstate";
/**
 *  Describes an instance of a connector. This includes the provided name, credentials ARN, connection-mode, and so on. To keep the API intuitive and extensible, the fields that are common to all types of connector profiles are explicitly specified at the top level. The rest of the connector-specific properties are available via the <code>connectorProfileProperties</code> field.
**/
export declare class ConnectorProfile extends SpeakeasyBase {
    connectionMode?: ConnectionModeEnum;
    connectorProfileArn?: string;
    connectorProfileName?: string;
    connectorProfileProperties?: ConnectorProfileProperties;
    connectorType?: ConnectorTypeEnum;
    createdAt?: Date;
    credentialsArn?: string;
    lastUpdatedAt?: Date;
    privateConnectionProvisioningState?: PrivateConnectionProvisioningState;
}
