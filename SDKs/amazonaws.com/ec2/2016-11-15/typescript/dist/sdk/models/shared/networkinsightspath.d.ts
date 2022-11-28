import { SpeakeasyBase } from "../../../internal/utils";
import { ProtocolEnum } from "./protocolenum";
import { Tag } from "./tag";
/**
 * Describes a path.
**/
export declare class NetworkInsightsPath extends SpeakeasyBase {
    createdDate?: Date;
    destination?: string;
    destinationIp?: string;
    destinationPort?: number;
    networkInsightsPathArn?: string;
    networkInsightsPathId?: string;
    protocol?: ProtocolEnum;
    source?: string;
    sourceIp?: string;
    tags?: Tag[];
}
