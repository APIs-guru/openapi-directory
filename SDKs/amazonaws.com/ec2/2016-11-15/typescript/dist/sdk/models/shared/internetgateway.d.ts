import { SpeakeasyBase } from "../../../internal/utils";
import { InternetGatewayAttachment } from "./internetgatewayattachment";
import { Tag } from "./tag";
/**
 * Describes an internet gateway.
**/
export declare class InternetGateway extends SpeakeasyBase {
    attachments?: InternetGatewayAttachment[];
    internetGatewayId?: string;
    ownerId?: string;
    tags?: Tag[];
}
