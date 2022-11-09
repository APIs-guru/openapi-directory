import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionModeEnum } from "./connectionmodeenum";
import { ConnectorProfileProperties } from "./connectorprofileproperties";
import { ConnectorTypeEnum } from "./connectortypeenum";
import { PrivateConnectionProvisioningState } from "./privateconnectionprovisioningstate";


// ConnectorProfile
/** 
 *  Describes an instance of a connector. This includes the provided name, credentials ARN, connection-mode, and so on. To keep the API intuitive and extensible, the fields that are common to all types of connector profiles are explicitly specified at the top level. The rest of the connector-specific properties are available via the <code>connectorProfileProperties</code> field. 
**/
export class ConnectorProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionMode" })
  connectionMode?: ConnectionModeEnum;

  @Metadata({ data: "json, name=connectorProfileArn" })
  connectorProfileArn?: string;

  @Metadata({ data: "json, name=connectorProfileName" })
  connectorProfileName?: string;

  @Metadata({ data: "json, name=connectorProfileProperties" })
  connectorProfileProperties?: ConnectorProfileProperties;

  @Metadata({ data: "json, name=connectorType" })
  connectorType?: ConnectorTypeEnum;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=credentialsArn" })
  credentialsArn?: string;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=privateConnectionProvisioningState" })
  privateConnectionProvisioningState?: PrivateConnectionProvisioningState;
}
