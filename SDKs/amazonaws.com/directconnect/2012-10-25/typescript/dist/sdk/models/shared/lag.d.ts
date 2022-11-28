import { SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";
import { HasLogicalRedundancyEnum } from "./haslogicalredundancyenum";
import { LagStateEnum } from "./lagstateenum";
import { MacSecKey } from "./macseckey";
import { Tag } from "./tag";
/**
 * Information about a link aggregation group (LAG).
**/
export declare class Lag extends SpeakeasyBase {
    allowsHostedConnections?: boolean;
    awsDevice?: string;
    awsDeviceV2?: string;
    awsLogicalDeviceId?: string;
    connections?: Connection[];
    connectionsBandwidth?: string;
    encryptionMode?: string;
    hasLogicalRedundancy?: HasLogicalRedundancyEnum;
    jumboFrameCapable?: boolean;
    lagId?: string;
    lagName?: string;
    lagState?: LagStateEnum;
    location?: string;
    macSecCapable?: boolean;
    macSecKeys?: MacSecKey[];
    minimumLinks?: number;
    numberOfConnections?: number;
    ownerAccount?: string;
    providerName?: string;
    region?: string;
    tags?: Tag[];
}
