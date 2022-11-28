import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionStateEnum } from "./connectionstateenum";
import { HasLogicalRedundancyEnum } from "./haslogicalredundancyenum";
import { MacSecKey } from "./macseckey";
import { Tag } from "./tag";



// Connection
/** 
 * Information about an Direct Connect connection.
**/
export class Connection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awsDevice" })
  awsDevice?: string;

  @SpeakeasyMetadata({ data: "json, name=awsDeviceV2" })
  awsDeviceV2?: string;

  @SpeakeasyMetadata({ data: "json, name=awsLogicalDeviceId" })
  awsLogicalDeviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=bandwidth" })
  bandwidth?: string;

  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=connectionName" })
  connectionName?: string;

  @SpeakeasyMetadata({ data: "json, name=connectionState" })
  connectionState?: ConnectionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=encryptionMode" })
  encryptionMode?: string;

  @SpeakeasyMetadata({ data: "json, name=hasLogicalRedundancy" })
  hasLogicalRedundancy?: HasLogicalRedundancyEnum;

  @SpeakeasyMetadata({ data: "json, name=jumboFrameCapable" })
  jumboFrameCapable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lagId" })
  lagId?: string;

  @SpeakeasyMetadata({ data: "json, name=loaIssueTime" })
  loaIssueTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=macSecCapable" })
  macSecCapable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=macSecKeys", elemType: MacSecKey })
  macSecKeys?: MacSecKey[];

  @SpeakeasyMetadata({ data: "json, name=ownerAccount" })
  ownerAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=partnerName" })
  partnerName?: string;

  @SpeakeasyMetadata({ data: "json, name=portEncryptionStatus" })
  portEncryptionStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=providerName" })
  providerName?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=vlan" })
  vlan?: number;
}
