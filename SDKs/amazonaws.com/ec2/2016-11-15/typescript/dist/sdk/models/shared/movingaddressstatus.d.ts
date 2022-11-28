import { SpeakeasyBase } from "../../../internal/utils";
import { MoveStatusEnum } from "./movestatusenum";
/**
 * Describes the status of a moving Elastic IP address.
**/
export declare class MovingAddressStatus extends SpeakeasyBase {
    moveStatus?: MoveStatusEnum;
    publicIp?: string;
}
