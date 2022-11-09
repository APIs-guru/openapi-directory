import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=allowsHostedConnections" })
  allowsHostedConnections?: boolean;

  @Metadata({ data: "json, name=awsDevice" })
  awsDevice?: string;

  @Metadata({ data: "json, name=awsDeviceV2" })
  awsDeviceV2?: string;

  @Metadata({ data: "json, name=awsLogicalDeviceId" })
  awsLogicalDeviceId?: string;

  @Metadata({ data: "json, name=connections", elemType: shared.Connection })
  connections?: Connection[];

  @Metadata({ data: "json, name=connectionsBandwidth" })
  connectionsBandwidth?: string;

  @Metadata({ data: "json, name=encryptionMode" })
  encryptionMode?: string;

  @Metadata({ data: "json, name=hasLogicalRedundancy" })
  hasLogicalRedundancy?: HasLogicalRedundancyEnum;

  @Metadata({ data: "json, name=jumboFrameCapable" })
  jumboFrameCapable?: boolean;

  @Metadata({ data: "json, name=lagId" })
  lagId?: string;

  @Metadata({ data: "json, name=lagName" })
  lagName?: string;

  @Metadata({ data: "json, name=lagState" })
  lagState?: LagStateEnum;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=macSecCapable" })
  macSecCapable?: boolean;

  @Metadata({ data: "json, name=macSecKeys", elemType: shared.MacSecKey })
  macSecKeys?: MacSecKey[];

  @Metadata({ data: "json, name=minimumLinks" })
  minimumLinks?: number;

  @Metadata({ data: "json, name=numberOfConnections" })
  numberOfConnections?: number;

  @Metadata({ data: "json, name=ownerAccount" })
  ownerAccount?: string;

  @Metadata({ data: "json, name=providerName" })
  providerName?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
