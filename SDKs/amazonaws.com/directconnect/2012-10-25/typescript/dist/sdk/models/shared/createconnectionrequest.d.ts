import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateConnectionRequest extends SpeakeasyBase {
    bandwidth: string;
    connectionName: string;
    lagId?: string;
    location: string;
    providerName?: string;
    requestMacSec?: boolean;
    tags?: Tag[];
}
