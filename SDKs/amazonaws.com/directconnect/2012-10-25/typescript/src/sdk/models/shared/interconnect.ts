import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HasLogicalRedundancyEnum } from "./haslogicalredundancyenum";
import { InterconnectStateEnum } from "./interconnectstateenum";
import { Tag } from "./tag";



// Interconnect
/** 
 * Information about an interconnect.
**/
export class Interconnect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awsDevice" })
  awsDevice?: string;

  @SpeakeasyMetadata({ data: "json, name=awsDeviceV2" })
  awsDeviceV2?: string;

  @SpeakeasyMetadata({ data: "json, name=awsLogicalDeviceId" })
  awsLogicalDeviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=bandwidth" })
  bandwidth?: string;

  @SpeakeasyMetadata({ data: "json, name=hasLogicalRedundancy" })
  hasLogicalRedundancy?: HasLogicalRedundancyEnum;

  @SpeakeasyMetadata({ data: "json, name=interconnectId" })
  interconnectId?: string;

  @SpeakeasyMetadata({ data: "json, name=interconnectName" })
  interconnectName?: string;

  @SpeakeasyMetadata({ data: "json, name=interconnectState" })
  interconnectState?: InterconnectStateEnum;

  @SpeakeasyMetadata({ data: "json, name=jumboFrameCapable" })
  jumboFrameCapable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lagId" })
  lagId?: string;

  @SpeakeasyMetadata({ data: "json, name=loaIssueTime" })
  loaIssueTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=providerName" })
  providerName?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
