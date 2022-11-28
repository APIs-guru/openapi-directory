import { SpeakeasyBase } from "../../../internal/utils";
import { HasLogicalRedundancyEnum } from "./haslogicalredundancyenum";
import { InterconnectStateEnum } from "./interconnectstateenum";
import { Tag } from "./tag";
/**
 * Information about an interconnect.
**/
export declare class Interconnect extends SpeakeasyBase {
    awsDevice?: string;
    awsDeviceV2?: string;
    awsLogicalDeviceId?: string;
    bandwidth?: string;
    hasLogicalRedundancy?: HasLogicalRedundancyEnum;
    interconnectId?: string;
    interconnectName?: string;
    interconnectState?: InterconnectStateEnum;
    jumboFrameCapable?: boolean;
    lagId?: string;
    loaIssueTime?: Date;
    location?: string;
    providerName?: string;
    region?: string;
    tags?: Tag[];
}
