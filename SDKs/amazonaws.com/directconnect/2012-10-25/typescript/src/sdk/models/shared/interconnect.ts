import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HasLogicalRedundancyEnum } from "./haslogicalredundancyenum";
import { InterconnectStateEnum } from "./interconnectstateenum";
import { Tag } from "./tag";


// Interconnect
/** 
 * Information about an interconnect.
**/
export class Interconnect extends SpeakeasyBase {
  @Metadata({ data: "json, name=awsDevice" })
  awsDevice?: string;

  @Metadata({ data: "json, name=awsDeviceV2" })
  awsDeviceV2?: string;

  @Metadata({ data: "json, name=awsLogicalDeviceId" })
  awsLogicalDeviceId?: string;

  @Metadata({ data: "json, name=bandwidth" })
  bandwidth?: string;

  @Metadata({ data: "json, name=hasLogicalRedundancy" })
  hasLogicalRedundancy?: HasLogicalRedundancyEnum;

  @Metadata({ data: "json, name=interconnectId" })
  interconnectId?: string;

  @Metadata({ data: "json, name=interconnectName" })
  interconnectName?: string;

  @Metadata({ data: "json, name=interconnectState" })
  interconnectState?: InterconnectStateEnum;

  @Metadata({ data: "json, name=jumboFrameCapable" })
  jumboFrameCapable?: boolean;

  @Metadata({ data: "json, name=lagId" })
  lagId?: string;

  @Metadata({ data: "json, name=loaIssueTime" })
  loaIssueTime?: Date;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=providerName" })
  providerName?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
