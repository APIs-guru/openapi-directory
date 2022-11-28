import { SpeakeasyBase } from "../../../internal/utils";
import { ByoipCidrStateEnum } from "./byoipcidrstateenum";
/**
 * Information about an address range that is provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP).
**/
export declare class ByoipCidr extends SpeakeasyBase {
    cidr?: string;
    description?: string;
    state?: ByoipCidrStateEnum;
    statusMessage?: string;
}
