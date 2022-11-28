import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";
import { HasLogicalRedundancyEnum } from "./haslogicalredundancyenum";
import { LagStateEnum } from "./lagstateenum";
import { MacSecKey } from "./macseckey";
import { Tag } from "./tag";



// Lag
/** 
 * Information about a link aggregation group (LAG).
**/
export class Lag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowsHostedConnections" })
  allowsHostedConnections?: boolean;

  @SpeakeasyMetadata({ data: "json, name=awsDevice" })
  awsDevice?: string;

  @SpeakeasyMetadata({ data: "json, name=awsDeviceV2" })
  awsDeviceV2?: string;

  @SpeakeasyMetadata({ data: "json, name=awsLogicalDeviceId" })
  awsLogicalDeviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=connections", elemType: Connection })
  connections?: Connection[];

  @SpeakeasyMetadata({ data: "json, name=connectionsBandwidth" })
  connectionsBandwidth?: string;

  @SpeakeasyMetadata({ data: "json, name=encryptionMode" })
  encryptionMode?: string;

  @SpeakeasyMetadata({ data: "json, name=hasLogicalRedundancy" })
  hasLogicalRedundancy?: HasLogicalRedundancyEnum;

  @SpeakeasyMetadata({ data: "json, name=jumboFrameCapable" })
  jumboFrameCapable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lagId" })
  lagId?: string;

  @SpeakeasyMetadata({ data: "json, name=lagName" })
  lagName?: string;

  @SpeakeasyMetadata({ data: "json, name=lagState" })
  lagState?: LagStateEnum;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=macSecCapable" })
  macSecCapable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=macSecKeys", elemType: MacSecKey })
  macSecKeys?: MacSecKey[];

  @SpeakeasyMetadata({ data: "json, name=minimumLinks" })
  minimumLinks?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfConnections" })
  numberOfConnections?: number;

  @SpeakeasyMetadata({ data: "json, name=ownerAccount" })
  ownerAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=providerName" })
  providerName?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
