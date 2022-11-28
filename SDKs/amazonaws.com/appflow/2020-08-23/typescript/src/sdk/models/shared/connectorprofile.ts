import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionModeEnum } from "./connectionmodeenum";
import { ConnectorProfileProperties } from "./connectorprofileproperties";
import { ConnectorTypeEnum } from "./connectortypeenum";
import { PrivateConnectionProvisioningState } from "./privateconnectionprovisioningstate";



// ConnectorProfile
/** 
 *  Describes an instance of a connector. This includes the provided name, credentials ARN, connection-mode, and so on. To keep the API intuitive and extensible, the fields that are common to all types of connector profiles are explicitly specified at the top level. The rest of the connector-specific properties are available via the <code>connectorProfileProperties</code> field. 
**/
export class ConnectorProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionMode" })
  connectionMode?: ConnectionModeEnum;

  @SpeakeasyMetadata({ data: "json, name=connectorProfileArn" })
  connectorProfileArn?: string;

  @SpeakeasyMetadata({ data: "json, name=connectorProfileName" })
  connectorProfileName?: string;

  @SpeakeasyMetadata({ data: "json, name=connectorProfileProperties" })
  connectorProfileProperties?: ConnectorProfileProperties;

  @SpeakeasyMetadata({ data: "json, name=connectorType" })
  connectorType?: ConnectorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=credentialsArn" })
  credentialsArn?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=privateConnectionProvisioningState" })
  privateConnectionProvisioningState?: PrivateConnectionProvisioningState;
}
