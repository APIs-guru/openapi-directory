import { SpeakeasyBase } from "../../../internal/utils";
import { InternetGatewayAttachment } from "./internetgatewayattachment";
import { Tag } from "./tag";
/**
 * Describes an egress-only internet gateway.
**/
export declare class EgressOnlyInternetGateway extends SpeakeasyBase {
    attachments?: InternetGatewayAttachment[];
    egressOnlyInternetGatewayId?: string;
    tags?: Tag[];
}
