import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StorageConnectorTypeEnum } from "./storageconnectortypeenum";



// StorageConnector
/** 
 * Describes a connector that enables persistent storage for users.
**/
export class StorageConnector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectorType" })
  connectorType: StorageConnectorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Domains" })
  domains?: string[];

  @SpeakeasyMetadata({ data: "json, name=ResourceIdentifier" })
  resourceIdentifier?: string;
}
