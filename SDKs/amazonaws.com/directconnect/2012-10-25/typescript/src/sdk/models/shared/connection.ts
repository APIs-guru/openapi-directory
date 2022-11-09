import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectionStateEnum } from "./connectionstateenum";
import { HasLogicalRedundancyEnum } from "./haslogicalredundancyenum";
import { MacSecKey } from "./macseckey";
import { Tag } from "./tag";


// Connection
/** 
 * Information about an Direct Connect connection.
**/
export class Connection extends SpeakeasyBase {
  @Metadata({ data: "json, name=awsDevice" })
  awsDevice?: string;

  @Metadata({ data: "json, name=awsDeviceV2" })
  awsDeviceV2?: string;

  @Metadata({ data: "json, name=awsLogicalDeviceId" })
  awsLogicalDeviceId?: string;

  @Metadata({ data: "json, name=bandwidth" })
  bandwidth?: string;

  @Metadata({ data: "json, name=connectionId" })
  connectionId?: string;

  @Metadata({ data: "json, name=connectionName" })
  connectionName?: string;

  @Metadata({ data: "json, name=connectionState" })
  connectionState?: ConnectionStateEnum;

  @Metadata({ data: "json, name=encryptionMode" })
  encryptionMode?: string;

  @Metadata({ data: "json, name=hasLogicalRedundancy" })
  hasLogicalRedundancy?: HasLogicalRedundancyEnum;

  @Metadata({ data: "json, name=jumboFrameCapable" })
  jumboFrameCapable?: boolean;

  @Metadata({ data: "json, name=lagId" })
  lagId?: string;

  @Metadata({ data: "json, name=loaIssueTime" })
  loaIssueTime?: Date;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=macSecCapable" })
  macSecCapable?: boolean;

  @Metadata({ data: "json, name=macSecKeys", elemType: shared.MacSecKey })
  macSecKeys?: MacSecKey[];

  @Metadata({ data: "json, name=ownerAccount" })
  ownerAccount?: string;

  @Metadata({ data: "json, name=partnerName" })
  partnerName?: string;

  @Metadata({ data: "json, name=portEncryptionStatus" })
  portEncryptionStatus?: string;

  @Metadata({ data: "json, name=providerName" })
  providerName?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=vlan" })
  vlan?: number;
}
