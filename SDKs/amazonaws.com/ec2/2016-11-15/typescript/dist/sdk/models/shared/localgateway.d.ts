import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Describes a local gateway.
**/
export declare class LocalGateway extends SpeakeasyBase {
    localGatewayId?: string;
    outpostArn?: string;
    ownerId?: string;
    state?: string;
    tags?: Tag[];
}
