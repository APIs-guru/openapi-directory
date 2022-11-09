import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NetworkInterface } from "./networkinterface";
import { Tag } from "./tag";


// AssetAttributes
/** 
 * A collection of attributes of the host from which the finding is generated.
**/
export class AssetAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentId" })
  agentId?: string;

  @Metadata({ data: "json, name=amiId" })
  amiId?: string;

  @Metadata({ data: "json, name=autoScalingGroup" })
  autoScalingGroup?: string;

  @Metadata({ data: "json, name=hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=ipv4Addresses" })
  ipv4Addresses?: string[];

  @Metadata({ data: "json, name=networkInterfaces", elemType: shared.NetworkInterface })
  networkInterfaces?: NetworkInterface[];

  @Metadata({ data: "json, name=schemaVersion" })
  schemaVersion: number;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
