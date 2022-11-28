import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionStateEnum } from "./connectionstateenum";
import { HasLogicalRedundancyEnum } from "./haslogicalredundancyenum";
import { MacSecKey } from "./macseckey";
import { Tag } from "./tag";
/**
 * Information about an Direct Connect connection.
**/
export declare class Connection extends SpeakeasyBase {
    awsDevice?: string;
    awsDeviceV2?: string;
    awsLogicalDeviceId?: string;
    bandwidth?: string;
    connectionId?: string;
    connectionName?: string;
    connectionState?: ConnectionStateEnum;
    encryptionMode?: string;
    hasLogicalRedundancy?: HasLogicalRedundancyEnum;
    jumboFrameCapable?: boolean;
    lagId?: string;
    loaIssueTime?: Date;
    location?: string;
    macSecCapable?: boolean;
    macSecKeys?: MacSecKey[];
    ownerAccount?: string;
    partnerName?: string;
    portEncryptionStatus?: string;
    providerName?: string;
    region?: string;
    tags?: Tag[];
    vlan?: number;
}
