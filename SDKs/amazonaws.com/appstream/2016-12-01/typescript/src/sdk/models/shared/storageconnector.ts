import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StorageConnectorTypeEnum } from "./storageconnectortypeenum";


// StorageConnector
/** 
 * Describes a connector that enables persistent storage for users.
**/
export class StorageConnector extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectorType" })
  connectorType: StorageConnectorTypeEnum;

  @Metadata({ data: "json, name=Domains" })
  domains?: string[];

  @Metadata({ data: "json, name=ResourceIdentifier" })
  resourceIdentifier?: string;
}
