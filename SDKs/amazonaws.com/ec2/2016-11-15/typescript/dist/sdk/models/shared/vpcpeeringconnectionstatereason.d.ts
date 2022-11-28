import { SpeakeasyBase } from "../../../internal/utils";
import { VpcPeeringConnectionStateReasonCodeEnum } from "./vpcpeeringconnectionstatereasoncodeenum";
/**
 * Describes the status of a VPC peering connection.
**/
export declare class VpcPeeringConnectionStateReason extends SpeakeasyBase {
    code?: VpcPeeringConnectionStateReasonCodeEnum;
    message?: string;
}
