import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateLagRequest extends SpeakeasyBase {
    childConnectionTags?: Tag[];
    connectionId?: string;
    connectionsBandwidth: string;
    lagName: string;
    location: string;
    numberOfConnections: number;
    providerName?: string;
    requestMacSec?: boolean;
    tags?: Tag[];
}
