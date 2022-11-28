import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkInterface } from "./networkinterface";
import { Tag } from "./tag";



// AssetAttributes
/** 
 * A collection of attributes of the host from which the finding is generated.
**/
export class AssetAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentId" })
  agentId?: string;

  @SpeakeasyMetadata({ data: "json, name=amiId" })
  amiId?: string;

  @SpeakeasyMetadata({ data: "json, name=autoScalingGroup" })
  autoScalingGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=ipv4Addresses" })
  ipv4Addresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=networkInterfaces", elemType: NetworkInterface })
  networkInterfaces?: NetworkInterface[];

  @SpeakeasyMetadata({ data: "json, name=schemaVersion" })
  schemaVersion: number;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
